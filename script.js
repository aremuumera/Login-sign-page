let loginBtn = document.querySelector('#loginbtn');
const signUpBtn = document.querySelector('#signupbtn');
const home = document.querySelector('.home');
const formContainer = document.querySelector('.form-container');
const passWordHide = document.querySelectorAll('.pw-hide');
const formClose = document.querySelector('.form-close');
const login = document.getElementById('login-form');
const signup = document.getElementById('signup-form');
const passWordShow = document.getElementById('pw-show');

// const loginIsClicked = true;


// formLogin.addEventListener('click', () => {
//     formLogin = true;
//     if (loginIsClicked && formLogin === true ){
//         formContainer.classList.add('show')
// 
// });

loginBtn.addEventListener('click', () =>{
    home.classList.add('show');
    // home.style.pointer-events = "auto";
})

formClose.addEventListener('click', () => {
    home.classList.remove('show');
    
});
signup.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.add('active');

})
login.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.remove('active');
    
})

passWordHide.forEach(passwordIcon => {
    console.log(passWordHide);
    
    // to get the password input which it the parent element for the type of input we are inserting
   
    passwordIcon.addEventListener('click', (e) => {
        let getPwdInput = passwordIcon.parentElement.querySelector('input'); // so this is how to get the password input
        console.log(getPwdInput);
         if (getPwdInput.type === 'password') {
            getPwdInput.type = 'text';
            passwordIcon.classList.replace('bx-hide','bx-show')
         }else{
            getPwdInput.type = 'password';
            passwordIcon.classList.replace('bx-show','bx-hide')
         }
    });

})   
