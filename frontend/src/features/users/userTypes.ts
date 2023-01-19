import { RestaurantId } from '../restaurants/restTypes';

export type UserId = number;

export type UserName = string;

export type User = {
  id: UserId;
  name: UserName;
  comments: UserComment[];
};

export type UserComment = {
  id: number;
  author: UserName;
  text: string;
  authorId: UserId;
  restId: RestaurantId;
};

export type UsersState = {
  userList: User[];
  error: Error | null;
};

export type UserAction =
  | {
      type: 'GET_USERS';
      payload: User[];
    }
  | { type: 'ADD_COMMENT'; payload: User };
