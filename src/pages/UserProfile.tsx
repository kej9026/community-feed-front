import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { getUserById, followUser, unfollowUser } from '../api/user';

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false); // mock 상태

  useEffect(() => {
    if (!id) return;
    getUserById(Number(id)).then(setUser);
  }, [id]);

  const handleFollow = async () => {
    if (!user) return;
    await followUser(user.id);
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    if (!user) return;
    await unfollowUser(user.id);
    setIsFollowing(false);
  };

  if (!user) return <p>유저 정보를 불러오는 중...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{user.info.name}</h1>
      <img src={user.info.profileImageUrl} alt="프로필" width="100" />
      <div style={{ marginTop: '12px' }}>
        {isFollowing ? (
          <button onClick={handleUnfollow}>언팔로우</button>
        ) : (
          <button onClick={handleFollow}>팔로우</button>
        )}
      </div>
    </div>
  );
}
