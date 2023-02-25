export const createTask = async (userActive, content, status) => {
  const apiKey =
    import.meta.env.VITE_URL_APIKEY !== undefined
      ? import.meta.env.VITE_URL_APIKEY
      : process.env.API_KEY
  const response = await fetch(`${apiKey}/v1/tasks`, {
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
