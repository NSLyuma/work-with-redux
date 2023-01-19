import { createContext } from 'react';
import { initState } from '../reducers/restReducer';
import { RestaurantState, RestaurantAction } from '../types/restTypes';

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
