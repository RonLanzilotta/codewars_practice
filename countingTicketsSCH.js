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
    let count = []
    let leaveCount = []

    // helper function to sort arr's
    function sort(arr) {
      for (let i=1; i<arr.length; i++) {
        let placeholder = 0
        if (arr[i] < arr[i-1]) {
           placeholder = arr[i-1]
           arr[i-1] = arr[i]
           arr[i] = placeholder
        }
      }
    }

    // loop through record
    for (let i=0; i<record.length; i++) {
      const num = record[i]

      // if num is 0, remove it from record arr. Later we will compare the count + leaveCount arr's by length, so any 0's will break this logic.
      if (num === 0) {
        record.slice(i, 1)
        i--
      }

      // check if number is negative
      if (num < 0) {
        // if it is a negative number in the first position of the record arr, the record is invalid
        if (count.length === 0) {
          return 'OPEN'
        }
        // if the negative record is equal to the record at the top of the stack (last index of record arr), remove the group that's on top of the stack, else push that neg value to the 
        Math.abs(num) === record[record.length - 1] ? count.pop() : leaveCount.push(num)
      } else {
        // if num is positive, add it to count arr
        count.push(num)
      }
    }

    if (count.length === leaveCount.length) {
      sort(count)
      sort(leaveCount)
      for (let i=0; i<count.length; i++) {
        if (count[i] != leaveCount[i]) {
          return 'OPEN'
        }
      }
    return 'CLOSE'
  }
}

console.log(canParkClose([3, 4, 7, 16, -7, -16, 2, -2, -4, -3]))