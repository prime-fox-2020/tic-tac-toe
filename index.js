function ticTacToe(){
    let arr = []
    let totalX = 0
    let totalO = 0

    for(let i = 0; i < 3; i++){
        let subArr = []
        for(let j = 0; j < 3; j++){
            let str = ''
            let switchXOrO = Math.round(Math.random())
            if(switchXOrO == 1){
                if(totalX < 5){
                    str += "X"
                    subArr.push(str)
                    totalX++
                }else{
                    str += "O"
                    subArr.push(str)
                    totalO++
                }
            }else{
                if(totalO < 5){
                    str += "O"
                    subArr.push(str)
                    totalO++
                }else{
                    str += "X"
                    subArr.push(str)
                    totalX++
                }
            }
        }
        arr.push(subArr)
    }
    return arr
}


const solution = ticTacToe()

for(let i = 0; i < solution.length; i++){
    let str = ''
    for(let j = 0; j < solution[i].length; j++){
        str += solution[i][j]
    }
    console.log(str)
}