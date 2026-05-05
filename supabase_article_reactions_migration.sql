-- Study Quest / article_reactions テーブル作成
-- Supabase SQL Editor にそのまま貼って実行してください

create table if not exists public.article_reactions (
  id bigint generated always as identity primary key,
  article_id text not null,
  reaction_type text not null check (reaction_type in ('helpful', 'learned', 'motivated')),
  created_at timestamptz default now()
);

-- RLS 有効化
alter table public.article_reactions enable row level security;

-- 誰でも読める
create policy if not exists "article_reactions_select"
  on public.article_reactions for select
  using (true);

-- 誰でも投稿できる（ログイン不要）
create policy if not exists "article_reactions_insert"
  on public.article_reactions for insert
  with check (true);

-- 集計クエリ用インデックス
create index if not exists idx_article_reactions_lookup
  on public.article_reactions (article_id, reaction_type);
