import { createSlice } from '@reduxjs/toolkit';
import { reducer } from 'next/dist/client/components/router-reducer/router-reducer';
import { IUser } from '@/models/IUser';

interface UserState {
  users: IUser
}

const initialState = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export default userSlice.reducer;
