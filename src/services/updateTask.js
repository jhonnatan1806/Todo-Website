export const updateTask = async (task) => {
  const apiKey =
    import.meta.env.VITE_URL_APIKEY === undefined
      ? process.env.VITE_URL_APIKEY
      : import.meta.env.VITE_URL_APIKEY
  const response = await fetch(`${apiKey}/v1/tasks/${task._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: task.user_id,
      content: task.content,
      status: task.status
    })
  })
  const data = await response.json()
  return data
}
