// function solution(number){
//   if (number < 0) {
//     return 0
//   } else {
//     let multiples = [];
//     for (let i = 3; i < number; i++) {
//       if ((i % 3 === 0) || (i % 5 === 0)) {
//         multiples.push(i)
//       }
//     }
//     multiples.reduce((a, b) => a + b)
//   }
// }

// solution(10)

function solution(number){
  // all negative numbers, 0, 1, 2, 3 return 0 because there can be no multiples of 3 or 5 that are less than the given number
  if (number <= 3) {
    return 0
  } else {
    // initiate empty array to store multiples of 3 or 5
    let multiples = [];
    // loop from 3 for efficiency because 1 and 2 are not multiples of 3 or 5.
    for (let i = 3; i < number; i++) {
      // if the number is divisible by 3 or 5
      if ((i % 3 === 0) || (i % 5 === 0)) {
        // add numbers that pass logic to array
              multiples.push(i)
      }
    }
    // sum numbers of multiples array
    return multiples.reduce((a, b) => a + b)
    
  }
}

console.log(solution(10))