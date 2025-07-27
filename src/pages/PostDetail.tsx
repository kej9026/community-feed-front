import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Post } from '../types/post';
import type { Comment } from '../types/comment';
import { getPostById } from '../api/post';
import { getComments } from '../api/comment';
import CommentBox from '../components/CommentBox';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!id) return;
    getPostById(Number(id)).then(setPost);
    getComments(Number(id)).then(setComments);
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.content.contentText}</h1>
      <p>작성자: {post.author.info.name}</p>
      <p>좋아요: {post.likeCount}</p>
      <hr />
      <h3>댓글</h3>
      {comments.map((c) => (
        <CommentBox key={c.id} comment={c} />
      ))}
    </div>
  );
}
