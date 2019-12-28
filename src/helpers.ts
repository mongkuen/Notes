export const pad = (num: number): string => {
  const str = `${num}`
  return str.length === 1 ? `0${str}` : str
}

const getDateComponents = (
  timestamp: number
): { year: string; month: string; date: string } => {
  const d = new Date(timestamp)
  return {
    year: `${d.getFullYear()}`,
    month: pad(d.getMonth() + 1),
    date: pad(d.getDate()),
  }
}

export const dateFromTimestamp = (
  timestamp: number,
  separator = '/'
): string => {
  const { year, month, date } = getDateComponents(timestamp)
  return `${month}${separator}${date}${separator}${year}`
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

export const inThreeDays = (): string => {
  const now = Date.now()
  const threeDayMilliseconds = 3 * 24 * 60 * 60 * 1000
  const inThreeDays = now + threeDayMilliseconds
  const { year, month, date } = getDateComponents(inThreeDays)
  return `${year}-${month}-${date}`
}

export const inputToLocalTimestamp = (dateInput: string): number => {
  const [year, month, date] = dateInput.split('-')
  const localTimestamp = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(date)
  ).getTime()
  return localTimestamp
}

export const isPast = (dateInput: string): boolean => {
  const localTimestamp = inputToLocalTimestamp(dateInput)
  const now = Date.now()
  return now > localTimestamp
}
