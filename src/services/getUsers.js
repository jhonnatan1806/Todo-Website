export const getUsers = async () => {
  const apiKey =
    import.meta.env.VITE_URL_APIKEY !== undefined
      ? import.meta.env.VITE_URL_APIKEY
      : process.env.API_KEY
  const response = await fetch(`${apiKey}/v1/users`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}
