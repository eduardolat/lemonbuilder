import axios from 'axios'

export const fetcher = async (url) => {
  const apiUrl = `${import.meta.env.VITE_API_ENDPOINT}${url}`
  const res = await axios.get(apiUrl)
  return res.data
}
