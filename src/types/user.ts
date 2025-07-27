export interface UserInfo {
  name: string;
  profileImageUrl: string;
}

export interface User {
  id: number;
  info: UserInfo;
}