import { useState } from 'react'
import {
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { onFormSubmit } from '@/helpers'
import { withNoAuthWrapper } from '@/hoc/WithNoAuth'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useStoreActions } from 'easy-peasy'

const AuthLogin = () => {
  const [loading, setLoading] = useState(false)

  const setToken = useStoreActions(actions => actions.auth.setToken)

  const handleSubmit = onFormSubmit(async (data) => {
    const { username, password } = data

    setLoading(true)

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/login`,
        { username, password }
      )

      window.localStorage.setItem('token', data.token)
      setToken(data.token)

      console.log(data)
    } catch (error) {
      console.error(error)
      toast.error('User or password not valid')
    } finally {
      setLoading(false)
    }
  })

  return (
    <>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?abstract)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'gray.main',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              py: 8,
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 1
            }}
          >
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                fullWidth
                id='username'
                label='Username'
                name='username'
                type='username'
                autoComplete='username'
                autoFocus
                required
              />
              <TextField
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                required
              />
              <LoadingButton
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 2 }}
                loading={loading}
              >
                Login
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default () => withNoAuthWrapper(AuthLogin)
