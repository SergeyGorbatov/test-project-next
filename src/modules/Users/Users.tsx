import { userAPI } from '@/services/UserService';

export const Users = () => {
  const { data: users, isLoading } = userAPI.useFetchUsersQuery(0);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      {users?.data?.map(({ first_name, id }) => (
        <div key={id}>
          <h1>{first_name}</h1>
        </div>
      ))}
    </div>
  );
};
