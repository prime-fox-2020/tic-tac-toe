function tictactoe() {
    let res = []
    let countX = 5
    let countO = 5

    for (let i = 0; i < 3; i++) {
        let temp = []
    for (let j = 0; j < 3; j++) {
      if (countX > 0 && countO > 0) {
        let random = Math.floor(Math.random()*2)
        if (random === 0) {
            temp.push('x')
            countX--
        } else if (random === 1) {
            temp.push('o')
            countO--
        }
      }else if (countX == 0) {
          temp.push('o')
      }else if(countO == 0){
          temp.push('x')
      }
    }
    res.push(temp)
    }
    return res
}

console.log(tictactoe())
