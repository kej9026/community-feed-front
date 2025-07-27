
import type { Comment } from '../types/comment';


export async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`);
  return await res.json();
}