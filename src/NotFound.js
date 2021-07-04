import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>This page dose not exists</p>
      <Link to='/' className=''>
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
