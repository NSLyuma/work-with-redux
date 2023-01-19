import { combineReducers } from 'redux';
import restReducer from '../features/restaurants/restReducer';
import { RestaurantState } from '../features/restaurants/restTypes';
import userReducer from '../features/users/userReducer';
import { UsersState } from '../features/users/userTypes';

export type RootState = {
  restaurants: RestaurantState;
  users: UsersState;
};

const rootReducer = combineReducers<RootState>({
  restaurants: restReducer,
  users: userReducer,
});

export default rootReducer;
