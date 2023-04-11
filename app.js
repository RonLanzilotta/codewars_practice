function solution(number){
  if (number < 0) {
    return 0
  } else {
    let multiples = [];
    for (let i = 3; i < number; i++) {
      if ((i % 3 === 0) || (i % 5 === 0)) {
        multiples.push(i)
      }
    }
    multiples.reduce((a, b) => a + b)
  }
}

solution(10)