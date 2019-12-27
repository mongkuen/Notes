export const dateFromTimestamp = (
  timestamp: number,
  separator = '/'
): string => {
  const d = new Date(timestamp)
  return `${d.getMonth() +
    1}${separator}${d.getDate()}${separator}${d.getFullYear()}`
}

export const timeFromTimestamp = (
  timestamp: number,
  separator = ':'
): string => {
  const d = new Date(timestamp)
  return `${d.getHours()}${separator}${d.getMinutes()}`
}
