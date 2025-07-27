import type { User } from '../types/user';




export async function getUserById(id: number): Promise<User> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`);
  return await res.json();
}

export async function followUser(id: number): Promise<void> {
  await fetch(`${import.meta.env.VITE_API_URL}/users/${id}/follow`, {
    method: 'POST',
  });
}

export async function unfollowUser(id: number): Promise<void> {
  await fetch(`${import.meta.env.VITE_API_URL}/users/${id}/unfollow`, {
    method: 'POST',
  });
}
