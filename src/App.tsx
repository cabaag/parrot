import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, IconButton, Snackbar } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Route, Switch ,
  BrowserRouter, StaticRouter
} from 'react-router-dom';
import { logout, refreshToken } from './actions/AuthActions';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import useAuth from './hooks/useAuth';
import Home from './screens/Home';
import Login from './screens/Login';
import AuthService from './services/AuthService';
import store from './store';

const authService = new AuthService()

if (AuthService.token) {
  store.dispatch(authService.isValidToken(AuthService.token))
}

function App() {

  const auth = useAuth()
  const dispatch = useDispatch();
  const [tokenExpired, setTokenExpired] = useState(false)

  useEffect(() => {
    if (auth.token && !auth.expired) {
      const remainingTime = auth.expiresIn - Date.now()
      setTimeout(() => {
        setTokenExpired(true);
      }, remainingTime)
    }
  }, [auth])

  const onCloseSnackbar = useCallback(() => {
    dispatch(logout)
    setTokenExpired(false)
  }, [])

  const onRefreshToken = useCallback(() => {
    dispatch(refreshToken(auth.refresh as string))
  }, [])

  const action = (
    <>
      <Button color="primary" onClick={onRefreshToken} size="small">
        Refrescar
      </Button>
      <IconButton
        aria-label="close"
        color="inherit"
        onClick={onCloseSnackbar}
        size="small">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );


  return (
    <Container maxWidth="sm" style={{
      minHeight: '100vh',
    }} >
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
      <Snackbar
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={1000 * 5}
        message="Token caducado"
        onClose={onCloseSnackbar}
        open={tokenExpired} />
    </Container>
  );
}

const AppWrapper = () =>
  typeof window !== 'undefined' ?
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter> :
    <StaticRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </StaticRouter>

export default AppWrapper;
