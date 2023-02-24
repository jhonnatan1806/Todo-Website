export const createTask = async (userActive, content, status) => {
  const response = await fetch(`${import.meta.env.VITE_URL_APIKEY}/v1/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userActive._id,
      content: content,
      status: status
    })
  })
  const data = await response.json()
  return data
}
