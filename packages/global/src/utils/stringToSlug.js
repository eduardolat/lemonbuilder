export const stringToSlug = (str) => {
  let newStr = str
  newStr = newStr.replace(/[^A-Za-z0-9_\- ]/gi, '')
  newStr = newStr.replace(/\s+/g, '-')
  return newStr
}
