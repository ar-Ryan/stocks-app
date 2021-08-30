const initInput = document.querySelector('.one');
const quantInput = document.querySelector('.two');
const currInput = document.querySelector('.three');
const message = document.querySelector('#message');
const checkBtn = document.querySelector('#check-btn');

checkBtn.addEventListener('click', createVariables);

function createVariables() {
	var initialPrice = Number(initInput.value);
	var currentPrice = Number(currInput.value);
	var stocksQuantity = Number(quantInput.value);

	calculateProfitLoss(initialPrice, stocksQuantity, currentPrice);
}


function calculateProfitLoss(initial, quantity, current) {
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		message.style.color = 'red';
		message.innerText = `Oops!! Your loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(2)}% :(`;
		message.style.backgroundColor = "#ffa74f";
	}
	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		message.style.color = 'green';
		message.style.backgroundColor = "#ffa74f";
		message.innerText = `Yayy!! Your Profit is ${profit} and profit Percentage is ${profitPercentage.toFixed(2)}% :)`;
	}
	else {
		message.style.color = 'white';
		message.style.backgroundColor = "#ffa74f";
		message.innerText = `No profit No loss, was it ITC bro? :P`;
	}
}