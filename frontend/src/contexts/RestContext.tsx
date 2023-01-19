import { createContext } from 'react';
import { initState } from '../features/restaurants/restReducer';
import {
  RestaurantState,
  RestaurantAction,
} from '../features/restaurants/restTypes';

export type RestState = {
  restaurants: RestaurantState;
  dispatch: React.Dispatch<RestaurantAction>;
};

export const initialValue = {
  restaurants: initState,
  dispatch: () => {},
};

const RestContext = createContext<RestState>(initialValue);

export default RestContext;
