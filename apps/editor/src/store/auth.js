import { action } from 'easy-peasy'

const auth = {
  loading: true,
  token: null,

  setLoading: action((state, payload) => {
    state.loading = payload
  }),

  setToken: action((state, payload) => {
    state.token = payload
  })
}

export default auth
