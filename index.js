let res=[]
let x=0
let o=0
for (let i = 0; i < 3; i++) {
    let temp=[]
    for (let j = 0; j < 3; j++) {
        let random=Math.round(Math.random()*1)
        if(x==5){
            temp.push('O')
            o++
        }else if (o==5){
            temp.push('X')
            x++
        }else if(random==0){
            temp.push('X')
            x++
        }else if (random==1){
            temp.push('O')
            o++
        }
        
    }
    res.push(temp)
}
console.log(res)
console.log(x,o)