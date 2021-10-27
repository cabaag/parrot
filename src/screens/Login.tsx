import {
  Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, TextField, Typography
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { login } from '../actions/AuthActions';
import useAuth from '../hooks/useAuth';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Ingrese un email valido')
    .required('Email es requerido'),
  password: yup
    .string()
    .min(6, 'Contraseña debe de ser minimo 6 caracteres')
    .required('Contraseña es requerida'),
});

const Login: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch()
  const { error: authError, success: authSuccess } = useAuth();

  useEffect(() => {
    if (authError) {
      formik.setSubmitting(false);
      formik.setErrors({
        password: 'Email o contraseña incorrecta'
      })
    }
    if (authSuccess) {
      formik.setSubmitting(false);
      history.replace('/');
    }
  }, [authError, authSuccess])

  const formik = useFormik({
    initialValues: {
      email: 'android-challenge@parrotsoftware.io',
      password: '8mngDhoPcB3ckV7X',
    },
    validationSchema,
    onSubmit: (values: any) => {
      dispatch(login(values.email, values.password))
      formik.setSubmitting(true)
    },
  });

  return (
    <Grid alignItems="center" container justifyContent="center" spacing={2} style={{
      minHeight: '100vh',
      margin: 0,
      width: '100%'
    }}>
      <Grid item style={{ padding: 0 }} xs={12}>
        <Typography gutterBottom variant="h3">
          Parrot Challenge
        </Typography>
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <CardContent>
              <Grid container direction="row" spacing={2} >
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Iniciar sesión
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    id="email"
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    id="password"
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password} />
                </Grid>
              </Grid>


            </CardContent>
            <CardActions>
              <Grid alignItems="flex-end" container direction="column" >
                <Grid item >
                  <Button disabled={formik.isSubmitting} size="small" type="submit" variant="contained">
                    {formik.isSubmitting ? <CircularProgress style={{ height: 20, width: 20 }} /> : 'Entrar'}
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>

  )
}

export default React.memo(Login)