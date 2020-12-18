


function maximumScore(tileHand) {
	let total = 0;
	for (let i = 0; i< tileHand.length; i++) {
		total += tileHand[i].score ;
	}
	return total;
}