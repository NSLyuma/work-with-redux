import { User, UserAction, UserComment, UsersState } from '../types/userTypes';

export const mockComments1: UserComment[] = [
  {
    id: 1,
    author: 'User1',
    text: 'Text1 from User1',
    authorId: 1,
    restId: 1,
  },
];

export const mockComments2: UserComment[] = [
  {
    id: 2,
    author: 'User2',
    text: 'Text1 from User2',
    authorId: 2,
    restId: 2,
  },
  {
    id: 3,
    author: 'User2',
    text: 'Text2 from User2',
    authorId: 2,
    restId: 3,
  },
];

export const mockComments3: UserComment[] = [
  {
    id: 4,
    author: 'User3',
    text: 'Text1 from User3',
    authorId: 3,
    restId: 4,
  },
  {
    id: 5,
    author: 'User3',
    text: 'Text2 from User3',
    authorId: 3,
    restId: 5,
  },
  {
    id: 6,
    author: 'User3',
    text: 'Text3 from User3',
    authorId: 3,
    restId: 1,
  },
];

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'User1',
    comments: mockComments1,
  },
  {
    id: 2,
    name: 'User2',
    comments: mockComments2,
  },
  {
    id: 3,
    name: 'User3',
    comments: mockComments3,
  },
];

export const initUserState: UsersState = { userList: [] };

function userReducer(state: UsersState, action: UserAction): UsersState {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}

export default userReducer;
