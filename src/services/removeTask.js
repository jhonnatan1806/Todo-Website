export const removeTask = async (task) => {
  const response = await fetch(
    `${import.meta.env.VITE_URL_APIKEY}/v1/tasks/${task._id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
  )
  const data = await response.json()
  return data
}
