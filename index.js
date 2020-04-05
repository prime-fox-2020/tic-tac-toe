function tictactoe(){
    const size = 3
    let tempO = 5
    let tempX = 5
    let row = []
    for (let i = 0; i<size; i++){
        let col = []
        for (let j = 0; j<size; j++){
            if(tempO>0 && tempX>0){
                let random = Math.round(Math.random())
                if(random === 0){
                    col.push('X')
                    tempX--
                } else {
                    col.push('O')
                    tempO--
                }
            } else if (tempO > 0){
                col.push('O')
                tempO--
            } else if (tempX > 0){
                col.push('X')
                tempX--
            } 
        }
        row.push(col)
    }
    return row
}

console.log(tictactoe())