import { RestaurantAction, RestaurantItem, RestaurantState } from './restTypes';

export const mockRestaurants: RestaurantItem[] = [
  { id: 1, title: 'Res1', description: 'Desc1' },
  { id: 2, title: 'Res2', description: 'Desc2' },
  { id: 3, title: 'Res3', description: 'Desc3' },
  { id: 4, title: 'Res4', description: 'Desc4' },
  { id: 5, title: 'Res5', description: 'Desc5' },
];

export const initState: RestaurantState = { list: [], error: null };

function restReducer(
  state: RestaurantState = initState,
  action: RestaurantAction,
): RestaurantState {
  switch (action.type) {
    case 'GET_RESTS':
      return {
        ...state,
        list: action.payload,
      };
    case 'EDIT_REST':
      return {
        ...state,
        list: [
          ...state.list.map(
            (item) =>
              (item = item.id === action.payload.id ? action.payload : item),
          ),
        ],
      };
    default:
      return state;
  }
}

export default restReducer;
