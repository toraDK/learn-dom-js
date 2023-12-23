// const x = document.querySelector('.close');

// x.addEventListener('click', function () {
//     document.querySelector('.card').style.display = 'none';
// });


//DOM TRAVESAL
const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         // console.log(e);
//         // console.log(e.target);
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function(a) {
    a.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
});



const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function(){
        alert('ok');
    });
});


// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);