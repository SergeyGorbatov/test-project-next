import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IFiltersProps, TGetFilter, TSubmit } from './types';

export const Filter = ({ setUsersState, initialUsers, setIsLoading }: IFiltersProps) => {
  const { query, isReady, push } = useRouter();

  const {
    register, handleSubmit, reset, setValue,
  } = useForm({
    defaultValues: {
      email: query?.email?.toString() || '',
      first_name: query?.first_name?.toString() || '',
      last_name: query?.last_name?.toString() || '',
    },
  });

  const getFilter: TGetFilter = (emailLower, firstNameLower, lastNameLower) => {
    setUsersState((data) => data.filter((user) => {
      const userEmail = user.email.toLowerCase().trim();
      const userFirstName = user.first_name.toLowerCase().trim();
      const userLastName = user.last_name.toLowerCase().trim();

      if (emailLower && firstNameLower && lastNameLower) {
        return userEmail.includes(emailLower)
          && userFirstName.includes(firstNameLower)
          && userLastName.includes(lastNameLower);
      }

      if (emailLower && firstNameLower) {
        return userEmail.includes(emailLower) && userFirstName.includes(firstNameLower);
      }

      if (emailLower && lastNameLower) {
        return userEmail.includes(emailLower) && userLastName.includes(lastNameLower);
      }

      if (firstNameLower && lastNameLower) {
        return userFirstName.includes(firstNameLower) && userLastName.includes(lastNameLower);
      }

      if (emailLower) {
        return userEmail.includes(emailLower);
      }

      if (firstNameLower) {
        return userFirstName.includes(firstNameLower);
      }

      if (lastNameLower) {
        return userLastName.includes(lastNameLower);
      }

      return true;
    }));
  };

  useEffect(() => {
    if (isReady) {
      const { email, first_name, last_name } = query;
      const strEmail = email?.toString();
      const strFirstName = first_name?.toString();
      const strLastName = last_name?.toString();

      if (strEmail) {
        setValue('email', strEmail);
      }

      if (strFirstName) {
        setValue('email', strFirstName);
      }

      if (strLastName) {
        setValue('email', strLastName);
      }

      if (email || first_name || last_name) {
        getFilter(strEmail, strFirstName, strLastName);
      }

      setIsLoading(false);
    }
  }, [isReady]);

  const onSubmit: TSubmit = ({ email, first_name, last_name }) => {
    const params = new URLSearchParams();
    const emailLower = email?.toLowerCase().trim();
    const firstNameLower = first_name?.toLowerCase().trim();
    const lastNameLower = last_name?.toLowerCase().trim();

    if (emailLower) {
      params.append('email', emailLower);
    }
    if (firstNameLower) {
      params.append('first_name', firstNameLower);
    }
    if (lastNameLower) {
      params.append('last_name', lastNameLower);
    }

    push({
      query: params.toString(),
    });

    getFilter(emailLower, firstNameLower, lastNameLower);
  };

  const resetFilters = () => {
    reset();
    push({ query: {} });
    setUsersState(initialUsers);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md w-3/12 self-center">
      <h2 className="text-lg font-semibold mb-4">Фильтрация</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
          {...register('email')}
        />
        <input
          type="text"
          placeholder="Имя"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
          {...register('first_name')}
        />
        <input
          type="text"
          placeholder="Фамилия"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
          {...register('last_name')}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Применить фильтр
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={resetFilters}
        >
          Сбросить
        </button>
      </form>
    </div>
  );
};
