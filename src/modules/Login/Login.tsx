import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '@/modules/Login/types';
import { userAPI } from '@/services/UserService';

export const Login = () => {
  const [fetchLogin, { isLoading, error }] = userAPI.useFetchLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (authData) => {
    try {
      const response = await fetchLogin(authData);

      if ('data' in response) {
        const { data } = response;

        if (data.token) {
          Cookies.set('token-test', data.token);
          router.push('/profile');
        }
      } else {
        console.error('An error occurred:', response.error);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="flex h-full items-center justify-center grow">
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" className="text-black" {...register('email', { required: true })} />
        {errors.email && <span className="text-red-400 font-bold">This field is required</span>}

        <input placeholder="Password" className="text-black" {...register('password', { required: true })} />
        {errors.password && <span className="text-red-400 font-bold">This field is required</span>}

        <button
          type="submit"
          className="border-2 disabled:bg-gray-600"
          disabled={!!errors.email || !!errors.password}
        >
          Login
        </button>

        {error && 'data' in error && <span className="text-red-400 font-bold">{error.data?.error}</span>}
      </form>
    </div>
  );
};
