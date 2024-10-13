export const getShortTime = () => {
  return new Date().toTimeString().slice(0, 5)
}
