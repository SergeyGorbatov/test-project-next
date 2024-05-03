import { GetStaticPaths, GetStaticProps } from 'next';
import { IUser, IUsers } from '@/models/IUser';
import { Layout } from '@/modules/Layout';
import { UserDetail } from '@/modules/UserDetail';

interface IGetStaticProps {
  user: {
    data: IUser
  }
}

const UserDetailPage = ({ user }: IGetStaticProps) => <Layout><UserDetail user={user.data} /></Layout>;

export const getStaticPaths: GetStaticPaths = (async () => {
  const res = await fetch('https://reqres.in/api/users');
  const users: IUsers = await res.json();

  const paths = users.data.map((user) => ({
    params: { id: String(user.id) },
  }));

  return {
    paths,
    fallback: false,
  };
});

export const getStaticProps: GetStaticProps = (async (context) => {
  const res = await fetch(`https://reqres.in/api/users/${context.params?.id}`);
  const user = await res.json();

  return { props: { user } };
});

export default UserDetailPage;
