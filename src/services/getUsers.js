export const getUsers = async () => {
  const apiKey =
    import.meta.env.VITE_URL_APIKEY === undefined
      ? process.env.VITE_URL_APIKEY
      : import.meta.env.VITE_URL_APIKEY
  const response = await fetch(`${apiKey}/v1/users`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}
