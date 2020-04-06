ticTacToe = () => {
    let [xo, o_, x_, board, mem] = ['XO', 0, 0, [], undefined];

    for (let x = 0; x < 3; x++) {
        board.push([]);
        for (let y = 0; y < 3; y++) {
            if (o_ < 4 && x_ < 4) {
                mem = xo[Math.floor(Math.random() * 2)];
                board[x].push(mem);
                mem == 'X' ? x_++ : o_++;
            } else if  ( x_ > 4 ) {
                board[x].push('O');
                o_++;
            } else {
                board[x].push('X');
                x_++;
            }
        }
    }

    return board;
}

console.table(ticTacToe());