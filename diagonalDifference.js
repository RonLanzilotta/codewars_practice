// function diagonalDifference(arr) {
//     function difference(a, b) {
//         return Math.abs(a - b)
//     }
    
//     let midIndex = Math.floor(arr.length / 2)
//     let lastIndex = arr.length - 1
    
//     let leftToRightSum = arr[0][0] + arr[midIndex][midIndex] + arr[lastIndex][lastIndex]
//     let rightToLeftSum = arr[0][lastIndex] + arr[midIndex][midIndex] + arr[lastIndex][0]

//     return difference(leftToRightSum, rightToLeftSum)
// }

// function diagonalDifference(arr) {
//     function difference(a, b) {
//         return Math.abs(a - b)
//     }
 
//     let [leftToRightSum, rightToLeftSum] = [0,0]
    
//     function leftToRightFunc(arr) {
//         for (let i = 0; i < arr.length; i++){
//             leftToRightSum += arr[i][i]
//         }
//         return leftToRightSum
//     }
    
//     function rightToLeftFunc(arr) {
//         let decrementor = 1
//         let xAxis = arr.length - decrementor
//         console.log(`arr.length: ${arr.length} decrementor: ${decrementor}`)
//         for (let i = 0; i < arr.length; i--){
//             // rightToLeftSum += arr[i][xAxis]
//             // decrementor++
//             // console.log(`sum: ${rightToLeftSum} xAxis: ${xAxis} decrementor: ${decrementor}`
//         }
//         return rightToLeftSum
//     }
//     return console.log(rightToLeftFunc(arr), leftToRightFunc(arr))
// }

// create function to calculate absolute difference between the two diagonal sums

function diagonalDifference(arr) {
    function difference(a, b) {
        return Math.abs(a - b)
    }

    // instantiate empty variables to hold sum values
    let [leftToRightSum, rightToLeftSum] = [0,0]

    // sums values left to right diagonally through matrix
    function leftToRightFunc(arr) {
        for (let i = 0; i < arr.length; i++){
            leftToRightSum += arr[i][i]
        }
        return leftToRightSum
    }

    // same as above function, but reverses each subarray first
    function rightToLeftFunc(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].reverse()
            rightToLeftSum += arr[i][i]
        }
        return rightToLeftSum
    }

    // pass the return of each sum function as an argument to the difference function
    console.log((difference(leftToRightFunc(arr), rightToLeftFunc(arr))))
}

diagonalDifference([[-1, 1, -7, -8], 
                    [-10, -8, -5, -2], 
                    [0, 9, 7, -1], 
                    [4, 4, -2, 1]])