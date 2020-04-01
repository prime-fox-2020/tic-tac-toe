let generateSquare = () => {
    let square = []
    let temp, totalX = 5, totalO = 5
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp = randomXO()
            if (temp == 'X') {
                if (totalX > 0) {
                    square.push(temp)
                    totalX--
                }
                else
                    square.push('O')

            }
            else if (temp == 'O') {
                if (totalO > 0) {
                    square.push(temp)
                    totalO--
                }
                else
                    square.push('X')

            }
        }

    }

    return square
}

let randomXO = () => {
    let r = Math.floor(Math.random() * 2) ? 'X' : 'O'
    return r
}
console.log(generateSquare())
// console.log(randomXO())
