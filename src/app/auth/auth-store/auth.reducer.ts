import { createReducer, on } from '@ngrx/store';
import { initialState, users } from './auth.state';
import { login, logout, signup } from './auth.actions';

const _authReducer = createReducer(
  initialState,
  on(login, (state, { email, password }) => {
    const usersArr = users;
    const index = usersArr.findIndex(
      (user) => user.email === email && user.password === password
    );
    if (index > -1) {
      state = { email, password, isLoggedIn: true };
    } else {
      state = { email, password, isLoggedIn: false };
    }
    return { ...state };
  }),
  on(signup, (state, { email, password }) => {
    const usersArr = users;
    const index = usersArr.findIndex(
      (user) => user.email === email && user.password === password
    );
    if (index > -1) {
      state = { email, password, isLoggedIn: false };
    } else {
      state = { email, password, isLoggedIn: true };
      users.push(state);
    }
    return { ...state };
  }),
  on(logout, (state) => {
    return { ...state, isLoggedIn: false };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
