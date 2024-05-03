import { GetStaticProps } from 'next';
import { IUsers } from '@/models/IUser';
import { Layout } from '@/modules/Layout';
import { Users } from '@/modules/Users';

interface IGetStaticProps {
  users: IUsers
}

const UsersPage = ({ users }: IGetStaticProps) => (<Layout><Users users={users.data} /></Layout>);

export const getStaticProps: GetStaticProps = (async () => {
  const res = await fetch('https://reqres.in/api/users');
  const users = await res.json();

  return { props: { users } };
});

export default UsersPage;
