import { useReducer } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import InfoPage from './routes/InfoPage';
import LoginPage from './routes/LoginPage';
import RestaurantsPage from './routes/RestaurantsPage';
import Navigation from './ui/Navigation';
import RestaurantEditPage from './routes/RestaurantEditPage';
import RestaurantItemPage from './routes/RestaurantItemPage';
import { Provider } from 'react-redux';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
