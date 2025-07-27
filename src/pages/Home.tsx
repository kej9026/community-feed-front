import PostCard from '../components/PostCard';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import type { Post } from '../types/post';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>게시글 목록</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
