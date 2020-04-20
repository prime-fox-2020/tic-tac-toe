let tic_tac_toe = []
let x = 5
let o = 5

for(let i = 0; i < 3; i++) {
let temp = []

    for(let j = 0; j < 3; j++) {
      let random = Math.round(Math.random() * 3)

        if(random % 2 == 0) {
            if(x > 0) {
                temp.push('x')
                x--
            } else {
                temp.push('o')
                o--
            }
        } else {
            if(o > 0) {
                temp.push('o')
                o--
            } else {
                temp.push('x')
                x--
            }
        }
    }
    tic_tac_toe.push(temp)
}
console.log(tic_tac_toe)