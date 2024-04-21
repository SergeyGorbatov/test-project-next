import { Layout } from '@/modules/Layout';
import { UserDetail } from '@/modules/UserDetail';

const UserDetailPage = (props) => <Layout><UserDetail user={props.user.data} /></Layout>;

export const getStaticPaths = (async () => {
  const res = await fetch('https://reqres.in/api/users');
  const users = await res.json();

  const paths = users.data.map((user) => ({
    params: { id: String(user.id) },
  }));

  return {
    paths,
    fallback: false,
  };
});

export const getStaticProps = (async (context) => {
  const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
  const user = await res.json();

  return { props: { user } };
});

export default UserDetailPage;
