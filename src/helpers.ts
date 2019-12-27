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

export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[]

export const capitalize = (str: string): string => {
  return str
    .split(' ')
    .map((word): string => {
      return `${word[0].toUpperCase()}${word.substring(1)}`
    })
    .join(' ')
}
