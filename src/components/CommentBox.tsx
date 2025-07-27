import type { Comment } from '../types/comment';

interface Props {
  comment: Comment;
}

export default function CommentBox({ comment }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
      <p>{comment.content.contentText}</p>
      <p>작성자: {comment.author.info.name}</p>
      <p>좋아요: {comment.likeCount}</p>
      <p>작성일: {new Date(comment.content.datetimeInfo.dateTime).toLocaleString()}</p>
    </div>
  );
}
