import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Loader from './components/Loader';
import HistoryRouter from './components/HistoryRouter';
import { Route } from 'react-router-dom';
import Errorboundary from './components/Errorboundary';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const BoardComponent = lazy(() => import('./container/index'));

class App extends Component {
  render() {
    return (
      <div>
        <HistoryRouter>
          <Errorboundary>
            <Suspense fallback={<Loader />}>
              <Header />
              <Switch>
                <Route exact path="/" render={(props) => <BoardComponent {...props} />} />
              </Switch>
            </Suspense>
          </Errorboundary>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
