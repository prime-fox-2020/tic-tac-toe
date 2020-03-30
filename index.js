let tictactoe = (xo) => {
    let col = [];
    let counterX = 4;
    let counterO = 4;

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            if(counterX > 0 && counterO > 0){
                const randomWord = xo[Math.floor(Math.random() * 2)];
                randomWord === 'X' ? counterX-- : counterO--;
                row.push(randomWord);
            } else if (counterX > 0){
                row.push('X');
                counterX--;
            } else if (counterO > 0){
                row.push('O');
                counterO--;
            } else {
                row.push(xo[Math.floor(Math.random() * 2)]);
            }
        }
        col.push(row);
    }
    return col;
}

const words = ['X', 'O'];

console.log(tictactoe(words))