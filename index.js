
function tic_tac_to() {
    // YOUR CODE HERE...
    const ukuran = 3
    let hasil = []
    let sumX = Math.round(Math.random()) + 4
    let sumO = ukuran ** 2 - sumX

    for (let i = 0; i < ukuran; i++) {
        let row = []
        for (let j = 0; j < ukuran; j++) {
            let isi = Math.round(Math.random())
            if (isi == 1) {
                if (sumX > 0) {
                    row.push("X")
                    sumX--
                } else {
                    row.push("O")
                    sumO--
                }
            } else {
                if (sumO > 0) {
                    row.push("O")
                    sumO--
                } else {
                    row.push("X")
                    sumX--
                }
            }
        }
        hasil.push(row)
    }


    return hasil
}

console.log(tic_tac_to());