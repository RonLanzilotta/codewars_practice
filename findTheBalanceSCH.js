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
    // initialize variable to keep track of sum of all arr elements
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    // initialize variable to keep track of leftSum, default zero
    let leftSum = 0;
    // initialize variable to keep track of minimum difference between left + right sums. We use Infinity because it will be an undetermined positive integer 
    let minDiff = Infinity;
    let balanceIndex = -1;
  
    for (let i = 0; i < arr.length; i++) {
      let rightSum = totalSum - leftSum - arr[i];
      let diff = Math.abs(leftSum - rightSum);
  
      if (diff < minDiff) {
        minDiff = diff;
        balanceIndex = i;
      }
  
      leftSum += arr[i];
    }
  
    return balanceIndex;
  }

findBalance([2, 4, 5, 1, -2, 7, 2, 1, 4])