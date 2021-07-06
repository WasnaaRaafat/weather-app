import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import './App.css';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path={['/','/weather-app/']}>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
