let bell = document.getElementById('bell');

bell.addEventListener('click', showBell);

function showBell(){
    let notify = document.querySelector('.pop-up');

    notify.classList.toggle('active');
}

let userBtn = document.querySelector('.userName');

userBtn.addEventListener('click', () =>{
    let users = document.querySelector('.user-pop-up');
    users.classList.toggle('show');
})