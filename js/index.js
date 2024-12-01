//declaring the password & the confirmation
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

//make an event listener to check if the password & confirmation match
confirm.addEventListener("input", function(){
    let pass = password.value;
    let confirmation = confirm.value;
    if(pass === confirmation) {
        console.log("pass match");
        password.style.border = "1px solid blue"
        confirm.style.border = "1px solid blue"
        
    }
     else {
        console.log("pass dont match")
        password.style.border = "1px solid red"
        confirm.style.border = "1px solid red"
    }
})