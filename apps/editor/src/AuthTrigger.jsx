import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import axios from 'axios'

const AuthTrigger = () => {
  // State and actions from store
  const setToken = useStoreActions(actions => actions.auth.setToken)
  const setLoading = useStoreActions(actions => actions.auth.setLoading)
  //

  // Check if token is in localStorage and set it in store
  useEffect(async () => {
    const token = window.localStorage.getItem('token')

    if (token) {
      try {
        await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setToken(token)
      } catch (err) {
        window.localStorage.removeItem('token')
        setToken(null)
      } finally {
        setLoading(false)
      }
    } else {
      setToken(null)
      setLoading(false)
    }
  }, [])
  //

  return null
}

export default AuthTrigger
