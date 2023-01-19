import { combineReducers } from 'redux';
import restReducer from '../features/restaurants/restReducer';
import { RestaurantState } from '../features/restaurants/restTypes';

// const albumsReducer = (): {} => ({});
// const authReducer = (): {} => ({});

export type RootState = {
  restaurants: RestaurantState;
  // albums: AlbumState
  // auth: AuthState
};

const rootReducer = combineReducers<RootState>({
  restaurants: restReducer,
  // albums: albumsReducer,
  // auth: authReducer,
});

export default rootReducer;
