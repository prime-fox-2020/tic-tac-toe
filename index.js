function ticTacToe() {
    let newArr = []
    let limit = 5
    let x = 0
    let o = 0
    for (let i = 0; i < 3; i++) {
        let tempArr = []
        for (let j = 0; j < 3; j++) {
            let str = ''
            let random = Math.round(Math.random())
            if (random == 1) {
                if (x < limit) {
                    str += "X"
                    tempArr.push(str)
                    x++
                } else {
                    str += "O"
                    tempArr.push(str)
                    o++
                }
            } else {
                if (o < limit) {
                    str += "O"
                    tempArr.push(str)
                    o++
                }else {
                    str += "X"
                    tempArr.push(str)
                    x++
                }
            }
        }
        newArr.push(tempArr)
    }
    return newArr
}


console.log(ticTacToe());