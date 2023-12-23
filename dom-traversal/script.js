// const x = document.querySelector('.close');

// x.addEventListener('click', function () {
//     document.querySelector('.card').style.display = 'none';
// });


//DOM TRAVESAL
const close = document.querySelectorAll('.close');

for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function () {
        close[i].parentElement.style.display = 'none';
    });
}