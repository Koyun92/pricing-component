const inputQuote = document.querySelector('.choiceBox_input--slider');
const outputViews = document.querySelector('.choiceBox_text--upper');
const outputValue = document.querySelector('.choiceBox_text-output-value');
const promoBtn = document.querySelector('.choiceBox_input--oneStepSlider')
let promoValue = 0;
let billing = 16;



const tenKViews = () => {
    outputViews.innerHTML = "10k pageviews";

    if (promoValue == 0) {
        billing = 8
        outputValue.innerHTML = billing + " $"
    } else {
        billing = 8 * 0.75
        outputValue.innerHTML = billing + " $"
    }
}
const fiftyKViews = () => {
    outputViews.innerHTML = "50k pageviews";
    if (promoValue == 0) {
        billing = 12
        outputValue.innerHTML = billing + " $"
    } else {
        billing = 12 * 0.75
        outputValue.innerHTML = billing + " $"
    }
}
const hundredKViews = () => {
    outputViews.innerHTML = "100k pageviews";
    if (promoValue == 0) {
        billing = 16
        outputValue.innerHTML = billing + " $"
    } else {
        billing = 16 * 0.75
        outputValue.innerHTML = billing + " $"
    }
}
const halfMilionViews = () => {
    outputViews.innerHTML = "500k pageviews";
    if (promoValue == 0) {
        billing = 24
        outputValue.innerHTML = billing + " $"
    } else {
        billing = 24 * 0.75
        outputValue.innerHTML = billing + " $"
    }
}
const MilionViews = () => {
    outputViews.innerHTML = "1M pageviews";
    if (promoValue == 0) {
        billing = 36
        outputValue.innerHTML = billing + " $"
    } else {
        billing = 36 * 0.75
        outputValue.innerHTML = billing + " $"
    }
}

const promoChange = () => {

    if (promoValue == 0) {
        promoValue = 1;
        billing = billing * 0.75;
        outputValue.innerHTML = billing + " $"

    } else {
        promoValue = 0;
        billing = billing + (billing / 3)
        outputValue.innerHTML = billing + " $"
    }
}













// CHECKING RANGE VALUE LISTENER 
inputQuote.addEventListener('input', (e) => {

    if (e.target.value == 1) {
        tenKViews();

    } else if (e.target.value == 2) {
        fiftyKViews();

    } else if (e.target.value == 3) {
        hundredKViews();

    } else if (e.target.value == 4) {
        halfMilionViews();
    } else if (e.target.value == 5) {
        MilionViews();

    }
})

// PROMO TOGGLE
promoBtn.addEventListener('input', () => {
    promoChange();

})



// const valueChange = (e) => {
// console.log(e.target.value);
// })
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0UXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvaWNlQm94X2lucHV0LS1zbGlkZXInKTtcclxuY29uc3Qgb3V0cHV0Vmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvaWNlQm94X3RleHQtLXVwcGVyJyk7XHJcbmNvbnN0IG91dHB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob2ljZUJveF90ZXh0LW91dHB1dC12YWx1ZScpO1xyXG5jb25zdCBwcm9tb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2VCb3hfaW5wdXQtLW9uZVN0ZXBTbGlkZXInKVxyXG5sZXQgcHJvbW9WYWx1ZSA9IDA7XHJcbmxldCBiaWxsaW5nID0gMTY7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRlbktWaWV3cyA9ICgpID0+IHtcclxuICAgIG91dHB1dFZpZXdzLmlubmVySFRNTCA9IFwiMTBrIHBhZ2V2aWV3c1wiO1xyXG5cclxuICAgIGlmIChwcm9tb1ZhbHVlID09IDApIHtcclxuICAgICAgICBiaWxsaW5nID0gOFxyXG4gICAgICAgIG91dHB1dFZhbHVlLmlubmVySFRNTCA9IGJpbGxpbmcgKyBcIiAkXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmlsbGluZyA9IDggKiAwLjc1XHJcbiAgICAgICAgb3V0cHV0VmFsdWUuaW5uZXJIVE1MID0gYmlsbGluZyArIFwiICRcIlxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGZpZnR5S1ZpZXdzID0gKCkgPT4ge1xyXG4gICAgb3V0cHV0Vmlld3MuaW5uZXJIVE1MID0gXCI1MGsgcGFnZXZpZXdzXCI7XHJcbiAgICBpZiAocHJvbW9WYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgYmlsbGluZyA9IDEyXHJcbiAgICAgICAgb3V0cHV0VmFsdWUuaW5uZXJIVE1MID0gYmlsbGluZyArIFwiICRcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBiaWxsaW5nID0gMTIgKiAwLjc1XHJcbiAgICAgICAgb3V0cHV0VmFsdWUuaW5uZXJIVE1MID0gYmlsbGluZyArIFwiICRcIlxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGh1bmRyZWRLVmlld3MgPSAoKSA9PiB7XHJcbiAgICBvdXRwdXRWaWV3cy5pbm5lckhUTUwgPSBcIjEwMGsgcGFnZXZpZXdzXCI7XHJcbiAgICBpZiAocHJvbW9WYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgYmlsbGluZyA9IDE2XHJcbiAgICAgICAgb3V0cHV0VmFsdWUuaW5uZXJIVE1MID0gYmlsbGluZyArIFwiICRcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBiaWxsaW5nID0gMTYgKiAwLjc1XHJcbiAgICAgICAgb3V0cHV0VmFsdWUuaW5uZXJIVE1MID0gYmlsbGluZyArIFwiICRcIlxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGhhbGZNaWxpb25WaWV3cyA9ICgpID0+IHtcclxuICAgIG91dHB1dFZpZXdzLmlubmVySFRNTCA9IFwiNTAwayBwYWdldmlld3NcIjtcclxuICAgIGlmIChwcm9tb1ZhbHVlID09IDApIHtcclxuICAgICAgICBiaWxsaW5nID0gMjRcclxuICAgICAgICBvdXRwdXRWYWx1ZS5pbm5lckhUTUwgPSBiaWxsaW5nICsgXCIgJFwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbGxpbmcgPSAyNCAqIDAuNzVcclxuICAgICAgICBvdXRwdXRWYWx1ZS5pbm5lckhUTUwgPSBiaWxsaW5nICsgXCIgJFwiXHJcbiAgICB9XHJcbn1cclxuY29uc3QgTWlsaW9uVmlld3MgPSAoKSA9PiB7XHJcbiAgICBvdXRwdXRWaWV3cy5pbm5lckhUTUwgPSBcIjFNIHBhZ2V2aWV3c1wiO1xyXG4gICAgaWYgKHByb21vVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIGJpbGxpbmcgPSAzNlxyXG4gICAgICAgIG91dHB1dFZhbHVlLmlubmVySFRNTCA9IGJpbGxpbmcgKyBcIiAkXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmlsbGluZyA9IDM2ICogMC43NVxyXG4gICAgICAgIG91dHB1dFZhbHVlLmlubmVySFRNTCA9IGJpbGxpbmcgKyBcIiAkXCJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcHJvbW9DaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKHByb21vVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIHByb21vVmFsdWUgPSAxO1xyXG4gICAgICAgIGJpbGxpbmcgPSBiaWxsaW5nICogMC43NTtcclxuICAgICAgICBvdXRwdXRWYWx1ZS5pbm5lckhUTUwgPSBiaWxsaW5nICsgXCIgJFwiXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9tb1ZhbHVlID0gMDtcclxuICAgICAgICBiaWxsaW5nID0gYmlsbGluZyArIChiaWxsaW5nIC8gMylcclxuICAgICAgICBvdXRwdXRWYWx1ZS5pbm5lckhUTUwgPSBiaWxsaW5nICsgXCIgJFwiXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIENIRUNLSU5HIFJBTkdFIFZBTFVFIExJU1RFTkVSIFxyXG5pbnB1dFF1b3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gMSkge1xyXG4gICAgICAgIHRlbktWaWV3cygpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT0gMikge1xyXG4gICAgICAgIGZpZnR5S1ZpZXdzKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PSAzKSB7XHJcbiAgICAgICAgaHVuZHJlZEtWaWV3cygpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT0gNCkge1xyXG4gICAgICAgIGhhbGZNaWxpb25WaWV3cygpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PSA1KSB7XHJcbiAgICAgICAgTWlsaW9uVmlld3MoKTtcclxuXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyBQUk9NTyBUT0dHTEVcclxucHJvbW9CdG4uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICBwcm9tb0NoYW5nZSgpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuLy8gY29uc3QgdmFsdWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4vLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbi8vIH0pIl0sImZpbGUiOiJtYWluLmpzIn0=
