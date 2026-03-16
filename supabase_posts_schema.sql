-- Create the posts table
CREATE TABLE public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create policies

-- 1. Allow public read access (anyone can view posts)
CREATE POLICY "Public profiles are viewable by everyone."
  ON public.posts FOR SELECT
  USING ( true );

-- 2. Allow authenticated users to create posts
CREATE POLICY "Authenticated users can insert posts"
  ON public.posts FOR INSERT
  TO authenticated
  WITH CHECK ( true );

-- 3. Allow authenticated users to update posts
CREATE POLICY "Authenticated users can update posts"
  ON public.posts FOR UPDATE
  TO authenticated
  USING ( true );

-- 4. Allow authenticated users to delete posts
CREATE POLICY "Authenticated users can delete posts"
  ON public.posts FOR DELETE
  TO authenticated
  USING ( true );

-- Create an index on the slug for faster lookups
CREATE INDEX IF NOT EXISTS posts_slug_idx ON public.posts (slug);
