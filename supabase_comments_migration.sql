-- Study Quest / コメント・リアクションシステム
-- Supabase SQL Editor にそのまま貼って実行してください

-- 1. article_reactions に user_id を追加（ログイン必須化）
alter table public.article_reactions
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

-- テストデータをクリア（user_idがないデータは削除）
delete from public.article_reactions where user_id is null;

-- 1人1記事1リアクションの一意制約
alter table public.article_reactions
  drop constraint if exists article_reactions_user_article_unique;
alter table public.article_reactions
  add constraint article_reactions_user_article_unique
  unique (article_id, user_id);

-- RLS更新（認証ユーザーのみ投稿可能）
drop policy if exists "article_reactions_insert" on public.article_reactions;
drop policy if exists "article_reactions_insert_auth" on public.article_reactions;
create policy "article_reactions_insert_auth"
  on public.article_reactions for insert
  to authenticated
  with check (auth.uid() = user_id);

-- 2. コメントテーブル
create table if not exists public.article_comments (
  id bigint generated always as identity primary key,
  article_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  user_name text not null,
  avatar_url text,
  body text not null check (char_length(body) between 1 and 500),
  report_count int not null default 0,
  created_at timestamptz default now()
);

alter table public.article_comments enable row level security;

create policy "comments_select"
  on public.article_comments for select
  using (report_count < 3);

create policy "comments_insert"
  on public.article_comments for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "comments_delete_own"
  on public.article_comments for delete
  to authenticated
  using (auth.uid() = user_id);

-- 3. コメントへのいいねテーブル
create table if not exists public.comment_reactions (
  id bigint generated always as identity primary key,
  comment_id bigint not null references public.article_comments(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique (comment_id, user_id)
);

alter table public.comment_reactions enable row level security;

create policy "comment_reactions_select"
  on public.comment_reactions for select using (true);

create policy "comment_reactions_insert"
  on public.comment_reactions for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "comment_reactions_delete"
  on public.comment_reactions for delete
  to authenticated
  using (auth.uid() = user_id);

-- 4. コメント通報テーブル
create table if not exists public.comment_reports (
  id bigint generated always as identity primary key,
  comment_id bigint not null references public.article_comments(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique (comment_id, reporter_id)
);

alter table public.comment_reports enable row level security;

create policy "comment_reports_insert"
  on public.comment_reports for insert
  to authenticated
  with check (auth.uid() = reporter_id);

-- 通報時にreport_countを更新するRPC関数
create or replace function report_comment(p_comment_id bigint)
returns void language plpgsql security definer as $$
begin
  insert into public.comment_reports (comment_id, reporter_id)
  values (p_comment_id, auth.uid())
  on conflict (comment_id, reporter_id) do nothing;

  update public.article_comments
  set report_count = (
    select count(*) from public.comment_reports where comment_id = p_comment_id
  )
  where id = p_comment_id;
end;
$$;

-- インデックス
create index if not exists idx_article_comments_article_id
  on public.article_comments (article_id, created_at desc);
create index if not exists idx_comment_reactions_comment_id
  on public.comment_reactions (comment_id);
