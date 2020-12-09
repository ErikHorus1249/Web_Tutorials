

var member = {
	tier: 'silver'
};

function getTotals(price, card){
	var discountRate;

	switch(card.tier) {
		case 'browze':
			discountRate = 0.02;
			break;
		case 'silver':
			discountRate = 0.05;
			break;
		case 'gold':
			discountRate = 0.1;
			break;
		case 'platinum':
			discountRate = 0.2;
			break;			
	}

	return price -= price*discountRate;
}

console.log(getTotals(50000,member));

