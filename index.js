const ul = document.getElementById("ul")
let nameInput = document.getElementById("name")
let numberInput = document.getElementById("number")
const button = document.getElementById("button")

const click = () =>{
    ul.innerHTML="";

    let name = nameInput.value
    let number = parseInt(numberInput.value)

    if(number<0){
        number =number*-1;
    }
    
    for(let i=1;i<=number;i++){

        
        const li = document.createElement("li")

        li.innerText=`${name} - ${i}`

        ul.appendChild(li)
    }
}





button.addEventListener("click", click);