import Image from 'next/image';
import Link from 'next/link';
import { IUserDetailProps } from './types';

export const UserDetail = ({ user }: IUserDetailProps) => {
  const {
    email, first_name, last_name, avatar,
  } = user;
  return (
    <div>
      <Image src={avatar} alt="avatar" width={100} height={100} />
      <p>{email}</p>
      <p>
        <span>{first_name}</span>
        {' '}
        <span>{last_name}</span>
      </p>

      <Link href="/users">Вернуться к списку</Link>
    </div>
  );
};
