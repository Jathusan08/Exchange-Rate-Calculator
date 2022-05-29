
const currencyElementOne = document.getElementById('currency-1');
const currencyElementTwo = document.getElementById('currency-2');
const amountElementOne = document.getElementById('amount-1');
const amountElementTwo = document.getElementById('amount-2');
const rateElement=document.getElementById('rate');
const swapElement=document.getElementById('swapbtn');


function currencyExchanger(){ // Fetch exhange rates and update the DOM
console.log('RAN');

const currencyOne = currencyElementOne.value;
const currencyTwo = currencyElementTwo.value;
console.log(currencyTwo);
//we're going to make request

fetch(` https://v6.exchangerate-api.com/v6/45c447643e93f201e193f037/latest/${currencyOne}`)
.then(res => res.json()) //  a promis back and want it in json format
.then(currencyData => { // promiese wehre we get the data 

console.log(currencyData);

const currencyRate= currencyData.conversion_rates[currencyTwo];

//console.log(currencyRate);

rateElement.innerText = `1 ${currencyOne} = ${currencyRate}  ${currencyTwo}`;


amountElementTwo.value = (amountElementOne.value * currencyRate).toFixed(2);

});


}

// creating event listeners
currencyElementOne.addEventListener('change',currencyExchanger)
currencyElementTwo.addEventListener('change',currencyExchanger)
amountElementOne.addEventListener('input',currencyExchanger)
amountElementTwo.addEventListener('input',currencyExchanger)




swapElement.addEventListener('click', () => {
const tempCurrency1 = currencyElementOne.value;
currencyElementOne.value = currencyElementTwo.value;
currencyElementTwo.value=tempCurrency1;
currencyExchanger();

});

currencyExchanger();