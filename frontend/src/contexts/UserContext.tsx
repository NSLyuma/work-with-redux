import { createContext } from 'react';
import { initUserState } from '../reducers/userReducer';
import { UserAction, UsersState } from '../types/userTypes';

export type UserState = {
  users: UsersState;
  dispatch: React.Dispatch<UserAction>;
};

export const initialValue = {
  users: initUserState,
  dispatch: () => {},
};

const RestContext = createContext<UserState>(initialValue);

export default RestContext;
