import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/weather-app'>
        <h1>Weather App</h1>
      </Link>
      <div className='links'></div>
    </nav>
  );
};

export default Navbar;
