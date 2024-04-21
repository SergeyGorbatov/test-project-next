import { Layout } from '@/modules/Layout';
import { Users } from '@/modules/Users';
import { userAPI } from '@/services/UserService';

const UsersPage = (props) => (<Layout><Users users={props.users.data} /></Layout>);

export const getStaticProps = (async (context) => {
  const res = await fetch('https://reqres.in/api/users');
  const users = await res.json();

  return { props: { users } };
});

export default UsersPage;
