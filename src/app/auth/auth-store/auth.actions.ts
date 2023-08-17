import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[auth page] login',
  props<{ email: string; password: string }>()
);

export const signup = createAction(
  '[auth page] signup',
  props<{ email: string; password: string }>()
);

export const logout = createAction('[auth page] logout');
