import { Grid, Switch } from '@mui/material';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../actions/StoreActions';
import { AVAILABILITY, Product as ProductType } from '../types/Store';
import './Product.css';

type ProductProps = {
  product: ProductType
}

const label = { inputProps: { 'aria-label': 'Disponible' } };

const styles = {
  imageContainer: {
    width: '100%'
  }
}

function Product({ product }: ProductProps) {

  const dispatch = useDispatch()

  const onChangeAvailibility = useCallback((event) => {
    dispatch(updateProduct(product.store, product.uuid, event.target.checked ? AVAILABILITY.AVAILABLE : AVAILABILITY.UNAVAILABLE))
  }, [])

  return (
    <Grid className="Product" container item key={product.uuid}>
      <Grid alignItems="center" container item justifyContent="center" xs={4}>
        <div style={styles.imageContainer}>
          <img alt={product.name} className={product.availability === AVAILABILITY.UNAVAILABLE ? 'disabled' : ''} src={product?.imageUrl} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <b>
          {product.name}
        </b>
        <div>
          ${+product.price}
        </div>
      </Grid>
      <Grid item xs={2}>
        <Switch {...label} checked={product.availability === AVAILABILITY.AVAILABLE} onChange={onChangeAvailibility} />
      </Grid>
    </Grid>
  )
}

export default React.memo(Product)