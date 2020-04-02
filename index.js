

function tiTacToe(){
    let tic_tac_toe =[];
    let jumlahX=0;
    let jumlahO=0;
    //Looping
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            //Mendefisikan x / o yang di masukan (random)
            let temp = Math.round(Math.random())
            let xo =['x','o']

            // Jika lebih dari lima, di open ke yang lain
            if(temp==1){
                jumlahX ++
                if(jumlahX>5){
                    temp = 0
                }
            }
            if(temp==0){
                jumlahO ++
                if(jumlahO>5){
                    temp = 1
                }
            }

            //Push ke tic_tac_toe
            if(tic_tac_toe[i]==undefined){
                tic_tac_toe[i]=[];
                tic_tac_toe[i].push(xo[temp])
            }else{
                tic_tac_toe[i].push(xo[temp])
            }       
        }      
    }
    return tic_tac_toe ; 
}


console.log(tiTacToe())