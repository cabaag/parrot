import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login: React.FC = () => {

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(true)
      history.replace('/');
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <CardHeader>
              Login
            </CardHeader>
            <CardContent>

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />

              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </CardContent>
            <CardActions>
              <Button size="small" disabled={formik.isSubmitting}>Submit</Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>

  )
}

export default React.memo(Login)