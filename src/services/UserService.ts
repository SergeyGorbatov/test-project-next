import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthUser, IAuthUserResponse, IUsers } from '@/models/IUser';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: (build) => ({
    fetchLogin: build.mutation<IAuthUserResponse, IAuthUser>({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),
    fetchUsers: build.query<IUsers, number>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});
