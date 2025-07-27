import type { User } from './user';

export interface DatetimeInfo {
  isEdited: boolean;
  dateTime: string;
}

export interface CommentContent {
  contentText: string;
  datetimeInfo: DatetimeInfo;
}

export interface Comment {
  id: number;
  postId: number;
  author: User;
  content: CommentContent;
  likeCount: number;
}
