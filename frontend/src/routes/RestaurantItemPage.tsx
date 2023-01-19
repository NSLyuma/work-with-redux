import RestContext from '../contexts/RestContext';
import UserContext from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserAction, UserComment } from '../types/userTypes';
import { mockUsers } from '../reducers/userReducer';

function RestaurantItemPage(): JSX.Element {
  const [textareaValue, setTextareaValue] = useState('');
  const { restaurants } = useContext(RestContext);
  const { id } = useParams();
  const rest = restaurants.list.find((item) => item.id === Number(id));

  const { users, dispatch } = useContext(UserContext);
  useEffect(() => {
    const action: UserAction = {
      type: 'GET_USERS',
      payload: mockUsers,
    };
    dispatch(action);
  }, [dispatch]);

  const addComment = () => {
    const newComment: UserComment = {
      id: Math.floor(performance.now()),
      author: 'Current user',
      text: textareaValue,
      authorId: 1,
      restId: rest?.id,
    };
    const action: UserAction = { type: 'ADD_COMMENT', payload: newComment };
    dispatch(action);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
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
