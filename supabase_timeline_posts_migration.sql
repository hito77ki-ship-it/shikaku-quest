-- Study Quest / timeline_posts schema patch
-- Supabase SQL Editor にそのまま貼って実行してください
--
-- 目的:
-- - フロント側が参照している timeline_posts の追加列を揃える
-- - 既存の古いスキーマでも 400 Bad Request にならないようにする

alter table public.timeline_posts
  add column if not exists subject_key text,
  add column if not exists is_declaration boolean not null default false,
  add column if not exists is_weekly_goal boolean not null default false,
  add column if not exists goal_hours integer not null default 0,
  add column if not exists is_achievement boolean not null default false,
  add column if not exists achievement_data text,
  add column if not exists is_free_post boolean not null default false,
  add column if not exists material_name text,
  add column if not exists material_cover text,
  add column if not exists material_id text,
  add column if not exists post_image text,
  add column if not exists avatar_url text,
  add column if not exists visibility text not null default 'public',
  add column if not exists pinned_until timestamptz;

-- 既存データの NULL を最低限ならしておく
update public.timeline_posts
set
  is_declaration = coalesce(is_declaration, false),
  is_weekly_goal = coalesce(is_weekly_goal, false),
  goal_hours = coalesce(goal_hours, 0),
  is_achievement = coalesce(is_achievement, false),
  is_free_post = coalesce(is_free_post, false),
  visibility = coalesce(visibility, 'public')
where
  is_declaration is null
  or is_weekly_goal is null
  or goal_hours is null
  or is_achievement is null
  or is_free_post is null
  or visibility is null;

-- visibility の値を軽く制約
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'timeline_posts_visibility_check'
  ) then
    alter table public.timeline_posts
      add constraint timeline_posts_visibility_check
      check (visibility in ('public', 'followers', 'private'));
  end if;
end $$;

-- よく使う並び・絞り込みのための軽い index
create index if not exists idx_timeline_posts_created_at
  on public.timeline_posts (created_at desc);

create index if not exists idx_timeline_posts_likes_count
  on public.timeline_posts (likes_count desc);

create index if not exists idx_timeline_posts_user_id
  on public.timeline_posts (user_id);

