-- Study Quest / 管理者ダッシュボード用マイグレーション
-- Supabase SQL Editor にそのまま貼って実行してください

-- 1. 閲覧数テーブル
create table if not exists public.article_views (
  article_id text primary key,
  view_count bigint not null default 0,
  updated_at timestamptz default now()
);

alter table public.article_views enable row level security;

create policy "article_views_select"
  on public.article_views for select using (true);

-- 閲覧数インクリメント（認証不要・匿名でも呼べる）
create or replace function increment_view(p_article_id text)
returns void language plpgsql security definer as $$
begin
  insert into public.article_views (article_id, view_count)
  values (p_article_id, 1)
  on conflict (article_id) do update
  set view_count = public.article_views.view_count + 1,
      updated_at = now();
end;
$$;

-- 2. 管理者：全コメント取得（report_count制限なし）
create or replace function admin_get_all_comments()
returns table (
  id bigint,
  article_id text,
  user_id uuid,
  user_name text,
  avatar_url text,
  body text,
  report_count int,
  created_at timestamptz
) language plpgsql security definer as $$
begin
  if (select email from auth.users where id = auth.uid()) != 'hito77ki@gmail.com' then
    raise exception 'unauthorized';
  end if;
  return query
    select ac.id, ac.article_id, ac.user_id, ac.user_name,
           ac.avatar_url, ac.body, ac.report_count, ac.created_at
    from public.article_comments ac
    order by ac.created_at desc;
end;
$$;

-- 3. 管理者：任意コメント削除
create or replace function admin_delete_comment(p_comment_id bigint)
returns void language plpgsql security definer as $$
begin
  if (select email from auth.users where id = auth.uid()) != 'hito77ki@gmail.com' then
    raise exception 'unauthorized';
  end if;
  delete from public.article_comments where id = p_comment_id;
end;
$$;

-- 4. 管理者：通報を却下（report_count をリセット）
create or replace function admin_dismiss_report(p_comment_id bigint)
returns void language plpgsql security definer as $$
begin
  if (select email from auth.users where id = auth.uid()) != 'hito77ki@gmail.com' then
    raise exception 'unauthorized';
  end if;
  delete from public.comment_reports where comment_id = p_comment_id;
  update public.article_comments set report_count = 0 where id = p_comment_id;
end;
$$;
