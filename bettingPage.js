console.log('success');

const btn =  document.querySelectorAll("#btn");
for(let button of btn){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        const textbox1 = button.parentElement.parentElement.querySelector('#team1');
        const textbox2 = button.parentElement.parentElement.querySelector('#team2');
        textbox1.removeChild(textbox1.querySelector('input'));
        textbox2.removeChild(textbox2.querySelector('input'));
        const message = document.createElement('b');
        message.innerText='Thank you for betting! Good luck!';
        message.style.fontSize = "15px";
        message.style.color = "white";
        textbox1.append(message);
        console.log(textbox1);
    });
    
    
}
