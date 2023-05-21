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