const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const produsButton = document.querySelector('.produs-button');
const divisionButton = document.querySelector('.division-button');
const calculatorNumber = document.querySelector('.calculator-number');

// varianta 1
// const addOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) + 1;
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) - 1;
// };

// minusButton.addEventListener('click', minusOne);

// varianta 2
// let number = 0;

// const addOne = () => {
//     number++;
//     calculatorNumber.innerText = number;

//     if(number >= 5) {
//         calculatorNumber.style.color = 'green';
//     }

//     if(number > -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     number--;
//     calculatorNumber.innerText = number;

//     if(number <= -5) {
//         calculatorNumber.style.color = 'red';
//     }

//     if(number > -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// minusButton.addEventListener('click', minusOne);

// varianta 3
let number = 0;
let produs = 1;

const updateCalculatorNumber = () => {
    calculatorNumber.innerText = number;

    if (number >= 10) {
        calculatorNumber.style.fontSize = '60px';
        calculatorNumber.style.color = 'grey';
    }
    if (number < 10) {
        calculatorNumber.style.fontSize = '52px';
        calculatorNumber.style.color = 'green';
    }

    if(number >= 5) {
        calculatorNumber.style.color = 'green';
    }

    if(number > -5 && number < 5) {
        calculatorNumber.style.color = 'black';
    }
}

const addOne = () => {
    number++;
    updateCalculatorNumber();
};

plusButton.addEventListener('click', addOne);

const minusOne = () => {
    number--;
    updateCalculatorNumber();
};

minusButton.addEventListener('click', minusOne);



const multiplyByTwo = () => {
    number*=2;
    updateCalculatorNumber();
};

produsButton.addEventListener('click', multiplyByTwo);

const divisionByTwo = () => {
    number/=2;
    updateCalculatorNumber();
};

divisionButton.addEventListener('click', divisionByTwo);


const resetButton = document.querySelector('.reset-button')
const numberOfResetsText = document.querySelector('.number-of-resets');
let numberOfResets = 0;


const resetCalculator = () => {
    number = 0;
    numberOfResets ++;
    numberOfResetsText.innerText = `Calculatorul a fost resetat de ${numberOfResets} ori`;
    updateCalculatorNumber();
}

resetButton.addEventListener('click', resetCalculator);





const helpButton = document.querySelector('.help-button')



helpButton.addEventListener('click', function () {
    alert(`Instructiuni de folosire`);
});




// Tema 27.03

// Pe calculatorul dezvoltat la curs:

// 1) de completat functionalitatea pentru butoanele de inmultire si impartire
// 2)undeva in dreapta jos pe ecran sa apara un buton de help care odata
//  apasat sa afiseze un alert cu instructiuni de folosire al calculatorului
// 3) daca cifra din calculator este mai mare decat 10 atunci textul din
// calculator sa aiba un font size mai mare ( cand scadeti sub 10 sa revina 
//     la ce am pus noi )
// 4)de adaugat buton de reset ( odata apasat sa reseteze cifra la zero )
// 5)undeva pe ecran sa apara numarul de resetari ale calculatorului
//  "Calculatorul a fost resetat de X ori"