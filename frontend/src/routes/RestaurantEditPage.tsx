import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import RestContext from '../contexts/RestContext';
import {
  RestaurantAction,
  RestaurantDesc,
  RestaurantItem,
  RestaurantTitle,
} from '../features/restaurants/restTypes';

function RestaurantEditPage(): JSX.Element {
  const { restaurants, dispatch } = useContext(RestContext);
  const { id } = useParams();
  const rest = restaurants.list.find(
    (item: RestaurantItem): boolean => item.id === Number(id),
  );

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState<RestaurantTitle>('');
  const [textareaValue, setTextareaValue] = useState<RestaurantDesc>('');

  useEffect(() => {
    if (rest) {
      setInputValue(rest.title);
      setTextareaValue(rest.description);
    }
  }, [rest]);

  if (!rest) {
    return <Navigate to="/restaurants" />;
  }

  const editRestaurant = () => {
    const editedRest: RestaurantItem = {
      id: rest?.id,
      title: inputValue,
      description: textareaValue,
    };
    const action: RestaurantAction = { type: 'EDIT_REST', payload: editedRest };
    dispatch(action);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleTitleChange}
        name="title"
        type="text"
        value={inputValue}
      />
      <textarea
        onChange={handleTextareaChange}
        name="description"
        value={textareaValue}
      />
      <button onClick={editRestaurant}>Save</button>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
}

export default RestaurantEditPage;
