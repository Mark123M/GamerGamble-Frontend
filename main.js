
const btn =  document.querySelector("#btn");
const text = document.querySelector("#balance");
let bal = Number(text.textContent);
const textbox = document.querySelector("#deposit");
console.log(bal);
btn.addEventListener('click',function(e){
    let dep = Number(textbox.value);
    bal = bal+dep;
    text.textContent=String(bal);
    textbox.value=null;
});