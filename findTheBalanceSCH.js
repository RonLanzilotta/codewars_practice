// function findBalance(intArray) {
//     // assign arr length to var
//     const int = intArray.length;
    
//     console.log(intArray)
//     for (let i = 1; i < int; i++) {
//         // makes arr[i] equal to the sum of all of its previous elements
//         intArray[i] += intArray[i-1];
//         console.log(`intArray: ${intArray}`)
//     }
    
//     // placeholder for difference between left and right sums, starting from index 0. Also acts as the sum of the whole array.
//     let diff = intArray[int-1];
//     console.log(`diff: ${diff}`)
//     // placeholder for the correct return index
//     let index = 0;
//     `index: ${index}`
    

//     for (let i=1; i < int; i++) {
//         const d = Math.abs((intArray[int-1] - intArray[i-1]) - intArray[i-1]);
//         console.log(`d: ${d}`)        
//         if (d < diff) {
//             diff = d;
//             index = i
//             console.log(`New diff: ${d} index = ${index}`)
//             console.log(`intArray: ${intArray}`)        

//         }
//     }
//     console.log(index)
    
//     // let results = []
    
//     // function sum(arr) {
//     //     console.log(arr.reduce((a, b) => a+b))
//     //     return arr.reduce((a, b) => a+b)
//     // }
    
//     // for (let i = 0; i < intArray.length; i++) {
//     //     let leftArr = intArray.slice(0, i)
//     //     let rightArr = intArray.slice(i, intArray.length)
        
        

//     //     // intArray.reduce((a, b) => a + b)
    
      
//     // }
// }

function findBalanceIndex(arr) {
    // init var to hold the sum of all arr elements
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    // init var to 0 to hold sum of elements on left of current index
    let leftSum = 0;
    // init var to keep track of min difference between left + right sums. We use Infinity because it will be an undetermined positive integer that we will decrement as we loop through the arr.
    let minDiff = Infinity;
    // -1 is the default case and will be returned if the arr is empty or has no valid answer.
    let balanceIndex = -1;
  
    // loop through the array 
    for (let i = 0; i < arr.length; i++) {
      // subtract the leftSum and the current arr element from totalSum to get the rightSum
      let rightSum = totalSum - leftSum - arr[i];
      // the diff is the absolute difference between the two sums at the particular index in the loop. 
      let diff = Math.abs(leftSum - rightSum);

      // if the difference between the sums is less than the minDiff, set minDiff to diff. If the diff == minDiff this logic will be skipped and the lowest balanceIndex will still get returned.
      if (diff < minDiff) {
        minDiff = diff;
        // set balanceIndex to that current index in the loop
        balanceIndex = i;
      } else {
        // when diff is no longer < minDiff, the ideal answer is found. return balanceIndex
        return balanceIndex
      }
        // increment the leftSum by the value of current arr element before the loop restarts
      console.log(`leftSum: ${leftSum}\nrightSum: ${rightSum}\ndiff: ${diff}\nminDiff: ${minDiff}`)
      leftSum += arr[i];
    }
  }

console.log(findBalanceIndex([4, 5, 86, 12, 87, 29, 91, 46, 4, 85,1, 90, 34, 75, 15, 87]))