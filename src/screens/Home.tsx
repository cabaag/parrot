import { Container } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Home: React.FC = () => {

  const auth = useAuth()
  
  return (
    <Container maxWidth="sm">

    </Container>
  )
}

export default React.memo(Home)