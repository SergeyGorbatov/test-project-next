import Link from 'next/link';
import { Filter } from '@/components/Filters';
import { IUser } from '@/models/IUser';

interface IUsersProps {
  users: IUser[]
}

export const Users = ({ users }: IUsersProps) => (
  <div className="flex flex-col">
    <Filter />

    {users.map(({ first_name, last_name, id }) => (
      <div key={id} className="my-5 self-center font-bold text-lg hover:text-amber-100">
        <Link href={`users/${id}`}>
          {id}
          {' '}
          {first_name}
          {' '}
          {last_name}
        </Link>
      </div>
    ))}
  </div>
);
