function tic(num) {
    let res = []
    countX = 5
    countO = 5
    for(let i = 0; i < num; i++) {
        let temp = []
        for(let j = 0; j < num; j++) {
            let acak = Math.round(Math.random() * num)
            if(acak % 2 == 0) {
                if(countX > 0) {
                    temp.push('x')
                    countX--
                } else {
                    temp.push('o')
                    countO--
                }
            } else {
                if(countO > 0) {
                    temp.push('o')
                    countO--
                } else {
                    temp.push('x')
                    countX--
                }
            }
        }
        res.push(temp)
    }
    return res
}

console.log(tic(3))