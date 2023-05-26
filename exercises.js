function addToZero(arr) {
    for (let i = 0; i <arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (i !== k) {
                if (arr[i] + arr[k] === 0) {
                    return true
                } 
            }
        }
    }
    return false
}

console.log(addToZero([1, 2, 3, -2]))

//Runtime Complexity: O(n^2)
//Space Complexity: O(1)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])

    for(let i = 0; i < word.length; i++) {
        let currentChar = word[i]

        if (uniqueChars.has(currentChar)) {
            return false
        }
    
    uniqueChars.add(currentChar)
    }
    return true
}

console.log(hasUniqueChars('Moonday'))

//Runtime Complexity: O(n)
//Space Complexity: O(n)

function isPangram(sentence) {
    let lowercase = sentence.toLowerCase()

    let collection = new Set([])

    for (let i = 0; i <lowercase.length; i++){
        let currentChar = lowercase[i]

        if (/[a-z]/.test(currentChar)) {
            collection.add(currentChar)
        }
    }

    return collection.size === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
console.log(isPangram('I like cats, but not mice'))

//Runtime Complexity: O(n)
//Space Complexity: O(1)

function findLongestWord(list) {
    let longest = 0

    for (let i = 0; i < list.length; i++) {
        let currentWord = list[i]

        if (currentWord.length > longest) {
            longest = currentWord.length
        }
    }
    return longest
}

console.log(findLongestWord(['hi', 'hello', 'excellent']))

//Runtime Complexity: O(n)
//Space Complexity: O(1)