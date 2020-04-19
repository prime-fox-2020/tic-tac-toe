function tictactoe() {
    let xo = 'xo'
    let res = []
    let countx = 5
    let counto = 5
    for (var i = 0; i < 3; i++) {
        let temp = []
        for (var j = 0; j < 3; j++) {
            if (countx > 0 && counto > 0) {
                let random = Math.floor(Math.random() * 2)
                if (xo[random] == 'x') {
                    temp.push('x')
                    countx--
                } else if (xo[random] == 'o') {
                    temp.push('o')
                    counto--
                }
                

            }else if (countx == 0) {
                temp.push('o')
            }else if(counto == 0){
                temp.push('x')
            }
        }
        res.push(temp)
    }
    return res
}

console.log(tictactoe())