import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import Product from './Product';
import { Category as CategoryType, Product as ProductType } from '../types/Store';

type CategoryProps = {
  category: CategoryType;
  products: ProductType[];
  expanded: boolean;
  onExpand: (panel: string, isExpanded: boolean) => void;
}

function Category({ category, products, expanded, onExpand }: CategoryProps) {

  const handleChange = useCallback((_event: any, isExpanded: boolean) => {
    onExpand(category.uuid, isExpanded)
  }, [onExpand])

  return (
    <Accordion expanded={expanded} key={category.name} onChange={handleChange}>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header">
        <Grid alignItems="center" container justifyContent="space-between">
          <Typography variant="h6">{category.name}</Typography>
          <div>{products.length}</div>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {
            products.map((product: ProductType) => <Product key={product.uuid} product={product} />)
          }
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default React.memo(Category)