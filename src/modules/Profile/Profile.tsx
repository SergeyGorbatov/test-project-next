import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const Profile = () => {
  const router = useRouter();

  const exit = () => {
    Cookies.remove('token-test');
    router.push('/');
  };

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={exit}>Выйти</button>
    </div>
  );
};
