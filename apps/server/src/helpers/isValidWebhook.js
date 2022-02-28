import validator from 'validator'

export default function isValidWebhook (item) {
  if (typeof item !== 'object') {
    return false
  }

  if (['POST', 'GET'].includes(item.method) === false) {
    return false
  }

  if (typeof item.url !== 'string') {
    return false
  }

  if (validator.isURL(item.url) === false) {
    return false
  }

  return true
}
