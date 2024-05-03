import Link from 'next/link';
import { useState } from 'react';
import { Filter } from '@/components';
import { IUser } from '@/models/IUser';

interface IUsersProps {
  users: IUser[]
}

export const Users = ({ users }: IUsersProps) => {
  const [usersState, setUsersState] = useState(users);
  const [isLoading, setIsLoading] = useState(true);

  const removeUser = (id: number) => {
    setUsersState(usersState.filter((user) => user.id !== id));
  };

  return (
    <div className="flex flex-col">
      <Filter setUsersState={setUsersState} initialUsers={users} setIsLoading={setIsLoading} />

      {isLoading
        ? <div className="my-5 self-center font-bold text-lg">ЗАГРУЗКА</div> : usersState.length
          ? usersState.map(({ first_name, last_name, id }, index) => (
            <div key={id} className="my-5 self-center">
              <Link href={`users/${id}`} className="font-bold text-lg hover:text-amber-100">
                {index + 1}
                {' '}
                {first_name}
                {' '}
                {last_name}
              </Link>

              <button
                type="button"
                onClick={() => removeUser(id)}
                className="ml-2 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-700"
              >
                &#x2717;
              </button>
            </div>
          )) : <h1 className="my-5 self-center font-bold text-lg">Пользователи не найдены</h1>}
    </div>
  );
};
