const select = document.querySelectorAll(".currency")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const result = document.querySelector(".result")

fetch("https://api.frankfurter.app/currencies").then((res) => res.json()).then((data)=>display(data));

function display(data){
    const entries=Object.entries(data);
    for(var i=0;i<entries.length;i++){
        select[0].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;

    }
}

btn.addEventListener("click",()=>{
    let currency1=select[0].value;
    let currency2=select[1].value;
    let value=input.value;
    if(currency1!=currency2){
        convert(currency1,currency2,value);
    }else{
        alert("choose different currencies !!! ");
    }
})

function convert(currency1,currency2,value){
    fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((data)=>data.json())
    .then((data)=>result.value=Object.values(data.rates)[0]);
}