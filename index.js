function board() {
    let arr = []
    let temp;
    let Xbox = 4;
    let Obox = 4;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp = turn()
            if (temp == 'X') {
                if (Xbox > 0) {
                    arr.push(temp)
                    Xbox--
                }
                else
                    arr.push('O')

            }
            else if (temp == 'O') {
                if (Obox > 0) {
                    arr.push(temp)
                    Obox--
                }
                else
                    arr.push('X')

            }
        }

    }

    return arr
}

function turn(){
    let r = Math.floor(Math.random() * 2) ? 'X' : 'O'
    return r
}


console.log(board())


