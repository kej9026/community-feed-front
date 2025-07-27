import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '12px' }}>
      <h2>{post.content.contentText}</h2>
      <p>작성자: {post.author.info.name}</p>
      <p>좋아요: {post.likeCount}</p>
      <p>작성일: {new Date(post.content.datetimeInfo.dateTime).toLocaleString()}</p>
    </div>
  );
}
