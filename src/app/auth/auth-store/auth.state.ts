import { UserData } from 'src/app/model/user.model';

export const initialState: UserData = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const users: UserData[] = [
  {
    email: 'test@gmail.com',
    password: '12345',
    isLoggedIn: false,
  },
];
