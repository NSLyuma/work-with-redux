import { Link } from 'react-router-dom';

function Navigation(): JSX.Element {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/info">Info</Link>
      <Link to="/restaurants">Restaurants</Link>
    </nav>
  );
}

export default Navigation;
