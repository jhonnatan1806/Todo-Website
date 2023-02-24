export const getUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_URL_APIKEY}/v1/users`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}
