export const getTasks = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_URL_APIKEY}/v1/tasks/${id||''}`,
    {
      method: 'GET'
    }
  )
  const data = await response.json()
  return data
}
