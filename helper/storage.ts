export const setItemStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItemStorage = (key: string) => {
  return typeof window !== 'undefined' ? localStorage.getItem(key): ''
}

export const removeItemStorage = (key: string) => {
  localStorage.removeItem(key)
}
