function getParkStatus(record) {
    
    let count = 0;
    let exitCount = 0;
    
    for (let i = 0; i < record.length; i++) {
        
        if (record[i] < 0) {
            exitCount--
            if (count === 0) {
                return 'OPEN'
            }
            count += Math.min(record[i], count)
        } else {
            exitCount++
            count += record[i]
        }
    // console.log(`record: ${record[i]}, count: ${count}, exitCount: ${exitCount}`)
        if (exitCount < 0) { return 'OPEN' }

    }
    return count === 0 ? 'CLOSE' : 'OPEN';
    // let guests = 0;
    // let count = 0;
    // const obj = {}
    // for (let i = 0; i < record.length; i++) {
    //     guests += record[i]
    //     if (record[i] > 0) {
    //         count++
    //     } else {
    //         count--
    //     }
    //     // console.log(`record: ${record[i]}, guests: ${guests}`)
        
    //     if (record[i] > 0) {
    //         obj[record[i]] = obj[record[i]] + 1 || 1
    //     } else {
    //         i = Math.abs(i)
    //         obj[record[i]] = obj[record[i]] - 1
    //     }
        
    //     console.log(obj)
    // }
    
    // if (guests) {
    //     return 'OPEN'
    // } return 'CLOSE'

}

function canParkClose(record) {
    // initialize a count variable to keep track of the number of people who entered the park
    let count = 0;
    // initialize a variable to keep track of the number of people who left the park
    let leaveCount = 0;
  
    // iterate over each number in the record
    for (let i = 0; i < record.length; i++) {
      const num = record[i];
      // if the number is negative, it represents a group leaving
      if (num < 0) {
        // if the number of people who left the park exceeds the number of people who entered, the record is invalid
        if (leaveCount + Math.abs(num) > count) {
          // because the record is invalid
          return 'OPEN';
        }
        // otherwise, increment the leaveCount variable
        leaveCount += Math.abs(num);
      } else {
        // if the number is positive, it represents a group entering
        count += num;
      }
    }
    
    // if the number of people who left the park equals the number of people who entered, the park can be closed
    return count === leaveCount ? 'CLOSE' : 'OPEN';
  }

  ///////////////////////////////////////////////////////////
  function canParkClose1(record) {
      // EDGE CASE: the record needs at least 2 entries to return 'CLOSE'.
    if (record.length < 2) {return 'OPEN'}
      // init arrays for groups entering and groups leaving
    let count = []
    let leaveCount = []
      // helper function to sort arr's
    function sort(arr) {
      for (let i=1; i<arr.length; i++) {
        let p = 0
        if (arr[i] < arr[i-1]) {
           p = arr[i-1]
           arr[i-1] = arr[i]
           arr[i] = p
           i=0
        }
      }
      return arr
    }

      // loop through record
    for (let i=0; i<record.length; i++) {
      const num = record[i]
        // Check if num is negative. If negative, check to see if the corresponding group already entered the park. If so, push to leaveCount, else the record is invalid.
      if (num < 0) {
          // EDGE CASE: 
        if (count.includes(Math.abs(num))) {
          leaveCount.push(num)
        } else {
          return 'OPEN'
        }
      }
        // if num is positive, add it to count arr
      if (num > 0) {count.push(num)}
    }
      // if the number of groups who have entered and left the park are equal, sort the arrays.
    if (count.length === leaveCount.length) {
      sort(count)
        // reverse the leave count arr so that the arr ascends by absolute value
      sort(leaveCount).reverse()
        // check each arr to see if each group that entered the park also left
      for (let i=0; i<count.length; i++) {
        if (count[i] != Math.abs(leaveCount[i])) {
          return 'OPEN'
        }
      }
    return 'CLOSE'
  } 
  return 'OPEN'
}

// console.log(canParkClose1([1, 2, 3, 4, -3, -2, -1, -4]))

function canParkClose2(record) {
  if (record.length < 2) {return 'OPEN'}

  let count = []
  let leaveCount = []

  for (let i=0; i<record.length; i++) {
    const num = record[i]
    if (num < 0) {
      if (count.includes(Math.abs(num))) {
        leaveCount.push(num)
      } else {
        return 'OPEN'
      }
    }
    if (num > 0) {count.push(num)}
  }
  return count.length === leaveCount.length ? 'CLOSE' : 'OPEN'
  }

console.log(canParkClose2([1, 2, -3, 4, -2, 3, -1, -4]))
