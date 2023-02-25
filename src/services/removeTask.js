export const removeTask = async (task) => {
  const apiKey =
    import.meta.env.VITE_URL_APIKEY !== undefined
      ? import.meta.env.VITE_URL_APIKEY
      : process.env.API_KEY
  const response = await fetch(`${apiKey}/v1/tasks/${task._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  return data
}
