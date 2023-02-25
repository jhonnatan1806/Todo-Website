export const removeTask = async (task) => {
  const url =
    import.meta.env.VITE_URL_APIKEY === undefined
      ? process.env.VITE_URL_APIKEY
      : import.meta.env.VITE_URL_APIKEY
  const response = await fetch(`${url}/api/v1/tasks/${task._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  return data
}
