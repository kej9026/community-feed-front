import type { Post } from '../types/post';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await res.json();
}


export async function getPostById(id: number): Promise<Post> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`);
  return await res.json();
}
