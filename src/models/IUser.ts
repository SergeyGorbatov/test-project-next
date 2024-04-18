export interface IUsers {
  data: IUser[]
}

export interface IUser {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface IAuthUserResponse {
  data: {
    token: string
  }
}

export interface IAuthUser {
  email: string
  password: string
}
