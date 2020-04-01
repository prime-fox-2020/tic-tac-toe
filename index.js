function ticTacToe(){
    let result = []
    let xo = ['x', 'o']
    let tampungX = 4
    let tampungO = 4

    for(let i=0; i<3; i++){
        let tampung = []

        for(let j=0; j<3; j++){
            let random = Math.floor(Math.random()* 2)
            //console.log(random)
            if(random === 1){
                if(tampungX > 0){
                    tampung.push(xo[0])
                    tampungX--
                } else {
                    tampung.push(xo[1])
                    tampungO--
                }
            } else {
                if(tampungO > 0){
                    tampung.push(xo[1])
                    tampungO--
                } else {
                    tampung.push(xo[0])
                    tampungX--
                }
            }
        }
        result.push(tampung)
    }
    console.log(`huruf X = ${tampungX}`)
    console.log(`huruf O = ${tampungO}`)
    //jika X = -1 dan O = 0 atau sebaliknya = true
    return result
}
console.log(ticTacToe())