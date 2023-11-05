/* Add your JavaScript to this file */

function isEmail(){
    let email = document.getElementById("email");
    let button = document.getElementsByClassName("btn")[1];
    let message = document.querySelector(".message");
    let userInput = email.value; 

    button.addEventListener("click", function(e){
        e.preventDefault();
        
        if(userInput == ""){
            message.textContent = "Please enter a vlid email address."
            return message;
        }

        else{
            message.textContent = "Thank you! Your email address" + userInput + "has been added to our mailing list!"
            return message;
        }
       

    }
    )
}

    window.onload = isEmail;
    

