const capitalize = require('./capitalize')

test ('capitalizes first letter in word', () => {
  expect(capitalize('hello')).toBe('Hello')
})

const revString = require('./reverseString')

test ('Reverses a string', () => {
  expect(revString('hello')).toBe('olleh')
})