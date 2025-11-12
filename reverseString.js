function reverseString(word) {
    let thing = word.split('')
    thing.reverse()

    let reversed = thing.join('')
    return reversed
}

module.exports = reverseString