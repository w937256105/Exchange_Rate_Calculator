const se1 = document.getElementById('se1');
const se2 = document.getElementById('se2');
const btn = document.getElementById('swap');
const num1 = document.getElementById('num1');
const  num2 = document.getElementById('num2');
const nav = document.getElementById('nav');

function calculate() {
    const se2_value = se2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${se1.value}`)
        .then(rel => rel.json())
        .then(data => {
            let rate = data.rates[se2_value];
            //console.log(rate);
            nav.innerHTML = `1${se1.value} = ${rate}${se2.value}`;
            num2.value = num1.value * rate;
        })
}

se1.onchange = function(){
    calculate();
}

se2.onchange = function(){
    calculate();
}

btn.onclick = function () {
    const temp = se1.value;
    se1.value = se2.value;
    se2.value = temp;
    calculate();
}

calculate();