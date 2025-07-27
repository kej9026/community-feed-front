import type { User } from './user';

export type PostPublicationState = 'PUBLIC' | 'ONLY_FOLLOWER' | 'PRIVATE';

export interface DatetimeInfo {
  isEdited: boolean;
  dateTime: string;
}

export interface PostContent {
  contentText: string;
  datetimeInfo: DatetimeInfo;
}

export interface Post {
  id: number;
  author: User;
  content: PostContent;
  likeCount: number;
  state: PostPublicationState;
}
