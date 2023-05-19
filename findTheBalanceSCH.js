function findBalance(intArray) {
    // assign arr length to var
    const int = intArray.length;
    
    for (let i = 1; i < int; i++) {
        // combine all values of intArray to a single sum value
        console.log(intArray)
        intArray[i] += intArray[i-1];
    }
    

    let diff = intArray[int-1];
    console.log(diff)
    let index = 0;
    
    for (let i=1; i < int; i++) {
        const d = Math.abs((intArray[int-1] - intArray[i-1]) - intArray[i-1]);
        if (d < diff) {
            diff = d;
            index = i
        }
    }
    console.log(index)
    
    // let results = []
    
    // function sum(arr) {
    //     console.log(arr.reduce((a, b) => a+b))
    //     return arr.reduce((a, b) => a+b)
    // }
    
    // for (let i = 0; i < intArray.length; i++) {
    //     let leftArr = intArray.slice(0, i)
    //     let rightArr = intArray.slice(i, intArray.length)
        
        

    //     // intArray.reduce((a, b) => a + b)
    
      
    // }
}

findBalance([1, 2, 3, 3, 2, 1])