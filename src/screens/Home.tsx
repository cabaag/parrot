import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/AuthActions';
import { getMyStores } from '../actions/UserActions';
import Category from '../components/Category';
import { RootState } from '../reducers';

const Home: React.FC = () => {

  const dispatch = useDispatch()
  const stores = useSelector((state: RootState) => state.user?.stores) || []
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  const handleLogout = () => {
    dispatch(logout)
  }

  useEffect(() => {
    dispatch(getMyStores())
  }, [])

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <Button onClick={handleLogout} variant="outlined">Salir</Button>
      </Grid>
      <Grid container direction="row">
        {
          stores.map(store => (
            <Grid item key={store.uuid}>
              <Typography gutterBottom variant="h4">{store.name}</Typography>
              {
                store.categories.map(category =>
                  <Category
                    category={category}
                    expanded={expanded === category.uuid}
                    key={category.name}
                    onExpand={handleChange}
                    products={store.products.filter(prod => prod.category.uuid === category.uuid)} />
                )
              }
            </Grid>
          ))
        }
      </Grid >
    </>
  )
}

export default React.memo(Home)