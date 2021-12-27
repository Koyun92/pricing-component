const inputQuote = document.querySelector('.choiceBox_input--slider');
const outputViews = document.querySelector('.choiceBox_text--upper');
const outputValue = document.querySelector('.choiceBox_text-output-value');
const promoBtn = document.querySelector('.choiceBox_input--oneStepSlider')
let promoValue = 0;
let billing = 16 ;



const Views = (pageviews, bill) => {
    outputViews.innerHTML =` ${pageviews} pageviews"`;

    if (promoValue == 0) {
        billing = bill
        outputValue.innerHTML = billing + ".00 $"
    } else {
        billing = bill * 0.75
        outputValue.innerHTML = billing + ".00 $"
    }
}


const promoChange = () => {

    if (promoValue == 0) {
        promoValue = 1;
        billing = billing * 0.75;
        outputValue.innerHTML = billing + ".00 $"
    } else {
        promoValue = 0;
        billing = billing + (billing / 3)
        outputValue.innerHTML = billing + ".00 $"
    }
}




// CHECKING RANGE VALUE LISTENER 
inputQuote.addEventListener('input', (e) => {

    if (e.target.value == 1) {
        Views("10k",8.00);

    } else if (e.target.value == 2) {
        Views("50K",12.00);

    } else if (e.target.value == 3) {
        Views("100k",16.00);

    } else if (e.target.value == 4) {
        Views("500k",24.00);
    } else if (e.target.value == 5) {
        Views("1M",36.00);

    }
})

// PROMO TOGGLE
promoBtn.addEventListener('input', () => {
    promoChange();

})


