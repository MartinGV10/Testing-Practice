const capitalize = require('./capitalize')

test ('capitalizes first letter in word', () => {
  expect(capitalize('hello')).toBe('Hello')
})