const submit =  document.querySelector("#container form button"),
completeMessage = document.getElementById("completeMessage"),
confirm = document.getElementById("confirm"),
form = document.querySelector("#container form");


const card = {
    Number:document.getElementById("cardnumber"),
    Name : document.getElementById("cardname"),
    Date : document.getElementById("carddate"),
    Code : document.getElementById("code"),
}

const formValues = {
    cardName: document.getElementById("cardHolder"),
    cardNumber: document.getElementById("cardNumber"),
    cardDate:  document.getElementById("expDate"),
    cardCode:  document.getElementById("cvc"),
}




// when submit button is pressed

submit.onclick = (e)=>{
    e.preventDefault();
    
    if(checkForVoid(formValues)){
        return;
    }

   // only after validation is complete
    cardUpation(card,formValues);

    let value = window.getComputedStyle(completeMessage).getPropertyValue("display");
    if(value !== "flex"){
        completeMessage.style.display = "flex";
        form.style.display = "none";
    }

}

formValues.cardName.oninput = e=>{
    if(/\d/.test(e.target.value.toString())){
    
        errorElement(e.target,"*Wrong format, use characters only!");
    }
    else{
        InvertElement(e.target);
    }
}

formValues.cardNumber.oninput = e=>{
    if(/[^\d]/.test(e.target.value.toString())){
    
        errorElement(e.target,"*Wrong format, use numbers only!");
    }
    else{
        InvertElement(e.target);
    }
}

formValues.cardCode.oninput = e=>{
    if(/[^\d]/.test(e.target.value.toString())){
    
        errorElement(e.target,"*Wrong format, use numbers only!");
    }
    else{
        InvertElement(e.target);
    }
}

formValues.cardDate.oninput = e=>{
    if(/[^\d/]/.test(e.target.value.toString())){
    
        errorElement(e.target,"*Wrong format, use numbers only!");
    }
    else{
        InvertElement(e.target);
    }
}













// form validatiors

function checkForVoid(obj){
    let IsEmpty = false;
    for(let item in obj){
        if(!obj[item].value){
            errorElement(obj[item],"*Can't be blank!");
            IsEmpty = true;
            continue;
        }
        InvertElement(obj[item]);
    }
    return IsEmpty;
}



function errorElement(element,error){
    
    if(element.parentElement.children.length <=2){
        setError(error,element.parentElement);
        element.style.border = "1px solid red";
    }

}

function InvertElement(element){
    if(element.parentElement.children.length > 2){       
        element.parentElement.removeChild(element.parentElement.lastChild);
        element.style.border = "1px solid rgb(23,5,73)";   
    }
}





function setError(error,parent){
    const err = document.createElement('p');
    err.innerText = error;
    parent.appendChild(err);


}

function cardUpation(obj,target){
    
    obj.Name.innerText = target.cardName.value;
    obj.Code.innerText = target.cardCode.value;
    obj.Date.innerText = target.cardDate.value;
    obj.Number.innerText = target.cardNumber.value;


}










confirm.onclick = ()=>{
    let value = window.getComputedStyle(document.querySelector("#container form")).getPropertyValue("display");

    for(let i in formValues){
        formValues[i].value = "";
    }


    if(value !== "flex"){
        completeMessage.style.display = "none";        
        form.style.display = "flex";
    }   


}