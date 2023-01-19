import { useReducer } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import InfoPage from './routes/InfoPage';
import LoginPage from './routes/LoginPage';
import RestaurantsPage from './routes/RestaurantsPage';
import Navigation from './ui/Navigation';
import RestContext from './contexts/RestContext';
import UserContext from './contexts/UserContext';
import RestaurantEditPage from './routes/RestaurantEditPage';
import RestaurantItemPage from './routes/RestaurantItemPage';
import restaurantsReducer, {
  initState,
} from './features/restaurants/restReducer';
import userReducer, { initUserState } from './reducers/userReducer';
import { Provider } from 'react-redux';
import store from './store';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(restaurantsReducer, initState);

  const [userState, userDispatch] = useReducer(userReducer, initUserState);
  return (
    <Provider store={store}>
      <RestContext.Provider value={{ restaurants: state, dispatch }}>
        <UserContext.Provider
          value={{ users: userState, dispatch: userDispatch }}
        >
          <BrowserRouter>
            <Navigation />

            <Routes>
              <Route path="/" element={<h1>HOME</h1>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/restaurants/:id" element={<RestaurantItemPage />} />
              <Route
                path="/restaurants/:id/edit"
                element={<RestaurantEditPage />}
              />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </RestContext.Provider>
    </Provider>
  );
}

export default App;
