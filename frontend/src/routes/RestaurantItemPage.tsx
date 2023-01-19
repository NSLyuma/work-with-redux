import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { UserAction, UserComment } from '../features/users/userTypes';
import { mockUsers } from '../features/users/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { RestaurantItem } from '../features/restaurants/restTypes';

function RestaurantItemPage(): JSX.Element {
  const [textareaValue, setTextareaValue] = useState('');
  const { id } = useParams();
  const rest = useSelector((state: RootState) =>
    state.restaurants.list.find(
      (item: RestaurantItem): boolean => item.id === Number(id),
    ),
  );

  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    const action: UserAction = {
      type: 'GET_USERS',
      payload: mockUsers,
    };
    dispatch(action);
  }, [dispatch]);

  if (!rest) {
    return <Navigate to="/restaurants" />;
  }

  const addComment = (): void => {
    const newComment: UserComment = {
      id: Math.floor(performance.now()),
      author: 'Current user',
      text: textareaValue,
      authorId: 1,
      restId: rest?.id,
    };

    const userComments = [...users.userList[0].comments, newComment];

    const updatedUser = {
      id: 1,
      name: 'Current user name',
      comments: userComments,
    };
    const action: UserAction = { type: 'ADD_COMMENT', payload: updatedUser };
    dispatch(action);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <h1>{rest?.title}</h1>
      <p>{rest?.description}</p>
      <Link to={`/restaurants/${rest?.id}/edit`}>Edit</Link>
      <ul>
        {users.userList.map((user) =>
          user.comments.map(
            (comment) =>
              comment.restId === rest?.id && (
                <li key={comment.id}>
                  <b>{user.name}</b>
                  <p>{comment.text}</p>
                </li>
              ),
          ),
        )}
      </ul>
      <div>
        <input type="text" value="Current user name" disabled />
        <textarea onChange={handleTextareaChange} placeholder="Add comment" />
        <button onClick={addComment}>Send</button>
      </div>
    </div>
  );
}

export default RestaurantItemPage;
