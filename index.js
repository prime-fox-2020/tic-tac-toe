function tictactoe(){
    let len = 3
    let board = []

    let banyakO = Math.round(Math.random()) + 4
    let banyakX = len**2 - banyakO
    for(let i = 0; i < len; i++){
        let temp = []
        for(let j = 0; j < len; j++){
            let random = Math.round(Math.random())
            if(random === 0){
                if(banyakO > 0){
                    temp.push('O')
                    banyakO--
                }
                else{
                    temp.push('X')
                }
                
            }
            else if(random === 1){
                if(banyakX > 0){
                    temp.push('X')
                    banyakX--
                }
                else{
                    temp.push('O')
                } 
            }
        }
        board.push(temp)
    }
    return board
}

console.log(tictactoe())