
function ticTacToe() {
    let players = 'XO'
    let board = []
    let countX = 4
    let countO = 4

    for (let i = 0; i < 3; i++) {
        let temp = []
        for (let j = 0; j < 3; j++) {
            let tictac = Math.floor(Math.random()* 2)            
            if (tictac == 1) {
                if (countX > 0) {
                    temp.push(players[0])
                    countX--
                } else {
                    temp.push(players[1])
                    countO--
                }
            } else {
                if (countX > 0) {
                    temp.push(players[1])
                    countO--
                } else {
                    temp.push(players[0])
                    countX--
                }
            }   
        }
        board.push(temp)
    }
    console.log(`Huruf X : ${countX}`);
    console.log(`Huruf O : ${countO}`);
    if ((countX === 0 && countO === -1) || (countX === -1 && countO === 0)) {
        return board
    } else{
        return false
    }
}

console.log(ticTacToe());
