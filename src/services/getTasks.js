export const getTasks = async (id) => {
  const apiKey = import.meta.env.VITE_URL_APIKEY || process.env.API_KEY
  const response = await fetch(`${apiKey}/v1/tasks/${id || ''}`, {
    method: 'GET'
  })
  const data = await response.json()
  return data
}
