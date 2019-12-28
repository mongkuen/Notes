import * as helpers from './index'

test('Padding pads single digits', () => {
  const result = helpers.pad(6)
  expect(result).toBe('06')
})

test('Padding does not pad double digits', () => {
  const result = helpers.pad(11)
  expect(result).toBe('11')
})

test('Timestamp correctly formats to date', () => {
  const result = helpers.dateFromTimestamp(1577494492278)
  expect(result).toBe('12/27/2019')
})

test('Capitalizes text', () => {
  const result = helpers.capitalize('a quick brown fox')
  expect(result).toBe('A Quick Brown Fox')
})

test('Correctly adjusts timestamp by three days', () => {
  const result = helpers.inThreeDays(1577494492278)
  expect(result).toBe('2019-12-30')
})
