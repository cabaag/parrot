import { Container } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/login">
              <Login />
            </PrivateRoute>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
