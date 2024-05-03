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
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={exit}
      >
        Выйти
      </button>
    </div>
  );
};
