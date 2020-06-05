// 5-find-words-that-can-be-formed-by-characters
//   You are given an array of strings words and a string chars.
//   A string is good if it can be formed by characters from chars (each character can only be used once).
//   Return the sum of lengths of all good strings in words.

function countCharacters(words, chars) {
    let count = 0
    words.forEach((word)=> {
        let char
        let result = 1
        let copiedChars = chars.slice(0)
        for(char of word.split('')) {
            const i = copiedChars.indexOf(char)
            if(i < 0) {
                result = 0
                break
            }
            let a = copiedChars.split('')
            a.splice(i,1)
            copiedChars = a.join("")
        }
        if(result)
            count += word.length
    })
    return count
}

let words1 = ["cat","bt","hat","tree"];
let chars1 = "atach";

let words2 = ["hello","world","leetcode"];
let chars2 = "welldonehoneyr";

console.log(countCharacters(words1, chars1)); // 6
console.log(countCharacters(words2, chars2)); // 10





// 6-unique-number-of-occurrences
//   Given an array of integers arr, 
//write a function that returns true if and only if the number of occurrences of each value in the array is unique.

function uniqueOccurrences(arr) {
    // count number of occurrences
    let countMap = {}
    arr.forEach((v)=> countMap[v]?countMap[v]++:countMap[v]=1)

    // make count list and sort
    let countList = []
    let v
    for(v in countMap)
        countList.push(countMap[v])
    countList.sort()

    // check uniqueness
    for(let i=0; i<countList.length-1; i++)
        if(countList[i] == countList[i+1])
            return false
    return true
}

console.log(uniqueOccurrences([1,2,2,1,1,3])); // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
console.log(uniqueOccurrences([1,2])); // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // true





// 7-lucky-numbers-in-a-matrix
//   Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//   A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

function luckyNumbers(matrix) {
    let results = []
    for(let i=0; i<matrix.length; i++) {
        let row = matrix[i]

        // find minimum in row
        let min
        let minCol
        for(let j=0; j<row.length; j++) {
            if(min==undefined || row[j]<min) {
                min = row[j]
                minCol = j
            }
        }

        // find maximum in column
        let max
        let maxRow
        for(let j=0; j<matrix.length; j++) {
            if(max==undefined || matrix[j][minCol]>max) {
                max = matrix[j][minCol]
                maxRow = j
            }
        }

        // check
        if(maxRow == i)
            results.push(row[minCol])
    }
    return results
}

let matrix1 = [[3,7,8],[9,11,13],[15,16,17]];
console.log(luckyNumbers(matrix1)); // [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

let matrix2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
console.log(luckyNumbers(matrix2)); // [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

let matrix3 = [[7,8],[1,2]]
console.log(luckyNumbers(matrix3)); // [7]

