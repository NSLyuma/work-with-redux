import { useEffect } from 'react';
import {
  RestaurantAction,
  RestaurantItem,
} from '../features/restaurants/restTypes';
import { Link } from 'react-router-dom';
import { mockRestaurants } from '../features/restaurants/restReducer';
import { RootState } from '../store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';

function RestaurantsPage(): JSX.Element {
  const restaurants = useSelector((state: RootState) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    const action: RestaurantAction = {
      type: 'GET_RESTS',
      payload: mockRestaurants,
    };
    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.list.map(
          (rest: RestaurantItem): JSX.Element => (
            <li key={rest.id}>
              <h3>{rest.title}</h3>
              <p>{rest.description}</p>
              <Link to={`/restaurants/${rest.id}`}>Details</Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default RestaurantsPage;
