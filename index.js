function createTicTacToe () {
  let jumlahX = 5;
  let jumlahY = 5;
  let arr = [];
  for (let i = 0; i < 3; i++) {        
      arr[i] = [];
      for (let j = 0; j < 3; j++) {
          let random = Math.round(Math.random());
          if(random === 0 && jumlahX > 0) {
              arr[i].push('X');
              jumlahX--;
          } else if (jumlahY > 0){
              arr[i].push('O');
              jumlahY--;
          } else if (jumlahX > 0) {
              arr[i].push('X');
              jumlahX--;
          }
      }
  }
  return arr
}
//test case
createTicTacToe()