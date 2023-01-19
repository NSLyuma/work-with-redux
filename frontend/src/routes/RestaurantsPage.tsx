import { useContext, useEffect } from 'react';
import RestContext from '../contexts/RestContext';
import { RestaurantAction, RestaurantItem } from '../types/restTypes';
import { Link } from 'react-router-dom';
import { mockRestaurants } from '../reducers/restReducer';

function RestaurantsPage(): JSX.Element {
  const { restaurants, dispatch } = useContext(RestContext);
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
        {restaurants.list.map((rest: RestaurantItem) => (
          <li key={rest.id}>
            <h3>{rest.title}</h3>
            <p>{rest.description}</p>
            <Link to={`/restaurants/${rest.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsPage;
