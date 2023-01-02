const   form = document.querySelector("form"),
        usernameField = form.querySelector(".username-field"),
        usernameInput = usernameField.querySelector(".username"),
        emailField = form.querySelector(".email-field"),
        emailInput = emailField.querySelector(".email"),
        passField = form.querySelector(".create-password"),
        passInput = passField.querySelector(".password"),
        cPassField= form.querySelector(".confirm-password"),
        cPassInput= cPassField.querySelector(".cPassword");
        //Username Validation
        function checkUsername(){
            const usernamePattern = /^[a-zA-Z0-9]{6,15}$/;
            if(!usernameInput.value.match(usernamePattern)){
                return usernameField.classList.add("invalid");
            }
            usernameField.classList.remove("invalid");
        }
        //Email Validation 
        function checkEmail(){
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!emailInput.value.match(emailPattern)){
                return emailField.classList.add("invalid");//adding invalid class if email value do not matched with email pattern
            }
            emailField.classList.remove("invalid");
        }
        //Password Validation
        function checkPassword(){
            const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
            if(!passInput.value.match(passPattern)){
                return passField.classList.add("invalid");
            }
            passField.classList.remove("invalid");
        }
        //cPassword Validation
        function checkcPassword(){
            const cPassPattern = passInput.value;
            if(cPassInput.value!==cPassPattern){
                return cPassField.classList.add("invalid");
            }
            cPassField.classList.remove("invalid");
        }
        //Hiden and show password
        const eyeIcon = document.querySelectorAll(".show-hide");
        eyeIcon.forEach(eyeIcon => {
            eyeIcon.addEventListener("click",()=>{
                const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icone and selecting password input
                if(pInput.type==="password"){
                    eyeIcon.classList.replace("bx-hide","bx-show");
                    return pInput.type="text";
                }
                eyeIcon.classList.replace("bx-show","bx-hide");
                pInput.type="password";
                
            })
        })
        // Calling Function on form Sumbit
        form.addEventListener("submit",(e) => {
            e.preventDefault(); // preventing from sumbmitting
            checkUsername();
            checkEmail();
            checkPassword();
            checkcPassword(); 
            //Submit 
        if(
            !usernameField.classList.contains("invalid")&&
            !emailField.classList.contains("invalid")&&
            !passField.classList.contains("invalid")&&
            !cPassField.classList.contains("invalid")
            ){
                location.href = form.getAttribute("action")
            }
        });
        //calling function on key up
        usernameInput.addEventListener("keyup",checkUsername);
        emailInput.addEventListener("keyup",checkEmail);
        passInput.addEventListener("keyup",checkPassword);
        cPassInput.addEventListener("keyup",checkcPassword);
        
