const pass = document.getElementById('pass');
const msg = document.getElementById('err');

function validatePassword() {
    const p = pass.value;
    if (p.search(/[0-9]/) < 0) {
        pass.classList.add('error');
        msg.classList.add('show');
    }
    else{
        pass.classList.remove('error');
        msg.classList.remove('show');
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    validatePassword();

});

