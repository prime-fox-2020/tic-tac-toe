function tictactoe() {
	const num = 3;
	const kotak = [];
	for (let i = 0; i < num; i++) {
		kotak.push([]);
	}

	let x = 5;
	let o = 5;

	for (let i = 0; i < kotak.length; i++) {
		for (let j = 0; j < num; j++) {
			let acak = Math.round(Math.random() * 5);
			if ((acak < 3 && x > 0) || o === 0) {
				kotak[i].push('x');
				x--;
			} else if ((acak >= 3 && o > 0) || x === 0) {
				o--;
				kotak[i].push('o');
			}
		}
	}
	return kotak;
}

console.log(tictactoe());
