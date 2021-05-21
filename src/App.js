import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Loader from './components/Loader';
import HistoryRouter from './components/HistoryRouter';
import { Route } from 'react-router-dom';
import Errorboundary from './components/Errorboundary';
import Header from './Header/index';

import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = lazy(() => import('./container/LoginPage'));
const Dashboard = lazy(() => import('./container/Dashboard'));
const About = lazy(() => import('./container/About'));
const Team = lazy(() => import('./container/Team'));

class App extends Component {
  render() {
    return (
      <div>
        <HistoryRouter>
          <Errorboundary>
            <Suspense fallback={<Loader />}>
              <Header />
              <Switch>
                <Route exact path="/" render={(props) => <LoginPage {...props} />} />
                <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
                <Route exact path="/about" render={(props) => <About {...props} />} />
                <Route exact path="/team" render={(props) => <Team {...props} />} />
              </Switch>
            </Suspense>
          </Errorboundary>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
