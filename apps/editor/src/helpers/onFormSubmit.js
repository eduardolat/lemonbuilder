/**
 * Easy form handling, read the entire article here: https://dev.to/smeijer/simple-form-handling-in-react-o72
 */

export const onFormSubmit = (callback) => {
  return (event) => {
    event.preventDefault()
    const values = getFormValues(event)
    return callback(values)
  }
}

function getFormValues (event) {
  // eslint-disable-next-line
  const data = new FormData(event.currentTarget)
  return Object.fromEntries(data.entries())
}
