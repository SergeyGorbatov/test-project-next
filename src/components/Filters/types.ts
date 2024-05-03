import { Dispatch, SetStateAction } from 'react';
import { IUser } from '@/models/IUser';

export interface IFiltersProps {
  initialUsers: IUser[]
  setUsersState: Dispatch<SetStateAction<IUser[]>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export type TGetFilter = (
  emailLower?: string,
  firstNameLower?: string,
  lastNameLower?: string
) => void;

export type TSubmit = (data: IUserSubmit) => void;

interface IUserSubmit {
  email: string,
  first_name: string,
  last_name: string,
}
