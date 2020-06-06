
// No. 1
//Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. 
//The function returns the number which is a duplicate or undefined if there are no duplicates.

function findTheDuplicate(arr) {
  var i
  var o = {}
  for(i of arr) {
    if(o.hasOwnProperty(i))
      return i
    o[i] = true
  }
}
// O(n)

// Examples:

console.log(findTheDuplicate([1,2,1,4,3,12])) // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])) // 9
console.log(findTheDuplicate([2,1,3,4])) // undefined






// No. 2
//Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number. 

//Note that the numbers don't need to be next to each other in the array. 
//Any pair where the second number comes later in the array and is also the larger number should count.

function findGreaterNumbers(arr) {
  var i,j
  var count = 0
  for(i=0; i<arr.length-1; i++) {
    for(j=i+1; j<arr.length; j++) {
      if(arr[i] < arr[j])
        count++
    }
  }
  return count
}
// O(n!)

console.log(findGreaterNumbers([1,2,3])) // 3 (2 > 1, 3 > 2, and 3 > 1)
console.log(findGreaterNumbers([6,1,2,7])) // 4
console.log(findGreaterNumbers([5,4,3,2,1])) // 0
console.log(findGreaterNumbers([])) // 0





// No. 3
//Dogs don't get along with cats, and cats don't get along with dogs. 
//What they both have in common is that they don't get along with water (baths). 
//Given an array of 'dogs', 'cats', and 'water', write a function called separate, 
//which returns a new array so that the dogs are separated from the cats by water.
// Make sure that cats always come first in the array.

//You can assume that the array will always at least three elements, and 
//that there'll always be at least one dog, one cat, and one water to work with. //

function separate(arr) {
  var count = {'cat':0, 'water':0, 'dog':0}
  var i
  for(i of arr)
    count[i]++
  var result = []
  for(i=0; i<count['cat']; i++)
    result.push('cat')
  for(i=0; i<count['water']; i++)
    result.push('water')
  for(i=0; i<count['dog']; i++)
    result.push('dog')
  return result
}
// O(n)


// with memory restriction
function separate2(arr) {
  var i,j
  for(i=0; i<arr.length-1; i++) {
    if(arr[i] === 'cat')
      continue
    
    for(j=i+1; j<arr.length; j++) {
      if(arr[j] === 'cat') {
        arr[j] = arr[i]
        arr[i] = 'cat'
        break
      }
    }
  }
  for(i=arr.length-1; i>0; i--) {
    if(arr[i] === 'cat')
      continue
    
    for(j=i-1; j>=0; j--) {
      if(arr[j] === 'dog') {
        arr[j] = arr[i]
        arr[i] = 'dog'
        break
      }
    }
  }
  return arr
}
// O(n!)

console.log(separate(['dog','cat','water'])) // ['cat','water','dog']

console.log(separate(['dog','cat','water','cat']))// ['cat', 'cat', 'water', 'dog'])

console.log(separate(['cat','cat','water','dog','water','cat','water','dog'])) 
  // ['cat','cat','cat','water','water','water','dog','dog']

console.log(separate(
   ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water'
]))

 // ['cat','cat','cat','cat','cat',
    // 'cat','cat','cat','cat','cat','cat',
    // 'cat','cat','cat','cat','cat','cat','cat',
    // 'water','water','water','water','water',
    // 'water','water','water','water','water','water',
    // 'water','water','water', 'dog']
 




// No.4
// Given a string of words, your goal is to find the highest scoring word in the string. 
//a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. 
//You can assume that strings will consist only of lowercase letters and spaces.
// In the event that two words have the same score, return the word that appears first in the string.

function highestScoringWord(str) {
  var arr = str.split(" ")
  var word
  var scores = []
  var i
  var highestScore = 0
  var highestWord
  for(i=0; i<arr.length; i++) {
    var word = arr[i]
    var j
    var score = 0
    for(j=0; j<word.length; j++)
      score += word.charCodeAt(j) - 96
    if(score > highestScore) {
      highestScore = score
      highestWord = word
    }
  }
  return highestWord
}
// O(n)


console.log(highestScoringWord("a +b c d e f")); // "f"
console.log(highestScoringWord("a b c d e f")); // "f"
console.log(highestScoringWord("hello world")); // "world"
console.log(highestScoringWord("go ahead make my day")); // "my"
console.log(highestScoringWord("there is no place like home")); // "there"
console.log(highestScoringWord("aaaaaa bbb cc f")); // "aaaaaa"
console.log(highestScoringWord("bbb cc f aaaaaa")); // "bbb"
console.log(highestScoringWord("this sentence has two highest scoring words")); // "sentence"

