function ticTacToe(){
  const arr     = []
  const str     = 'xo'
  let   counter = [0, 0]
  
  for(let i = 0; i < 3; i++){
    const temp = []
    for(let j = 0; j < 3; j++){
      const judge = Math.floor(Math.random() * 2)
      if(counter[0] < 5 && counter[1] < 5)  { temp.push(str[judge]); counter[judge]++ }
      else if(counter[0] === 5)             { temp.push(str[1]);     counter[1]++     }
      else if(counter[1] === 5)             { temp.push(str[0]);     counter[0]++     }
    }
    arr.push(temp)
  }
  return arr
}

const tic_tac_toe = ticTacToe()

console.log(tic_tac_toe)
console.log(tic_tac_toe[1][1])