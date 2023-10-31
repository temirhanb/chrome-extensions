export const fetchUserInfo = async () => {
  try {
    const response = await fetch("https://statistics-api.wildberries.ru/api/v1/supplier/stocks")
    return await response.json()
  } catch (e) {
    console.log(e)
  }
}
