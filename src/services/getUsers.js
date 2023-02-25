export const getUsers = async () => {
  const url =
    import.meta.env.VITE_URL_APIKEY === undefined
      ? process.env.VITE_URL_APIKEY
      : import.meta.env.VITE_URL_APIKEY
  const response = await fetch(`${url}/api/v1/users`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}
