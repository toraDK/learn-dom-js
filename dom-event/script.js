// //onclick = melakukan perubahan saat elemen di klik

// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// //addeventListener = sama sama melakukan perbedaan tetapi jika menggunakan addEventListener ada dua parameter di dalam kkurung nya yang pertama berisi event apa yang akan dilakukan contohnya seperti click atau hover dan yang kedua perubahan apa yang dilakukan yang biasanya berisi fungsi
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item Baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });


//jika melakukan perubahan dua kali atau lebih di fungsi yang berbeda menggunakan onclick maka perubahan yang akan di terlihat oleh user hanya perubahan terakhir saja
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue'; 
// }

// p3.onclick = function () {
//     p3.style.color = 'red';
// }

// //jika melakukan perubahan dua kali atau lebih di fungsi yang berbeda menggunakan addEventListener maka semua perubahan akan terlihat semua oleh user
// p3.addEventListener('click', function () {
//     p3.style.backgroundColor = 'lightblue';
// });

// p3.addEventListener('click', function () {
//     p3.style.color = 'red';
// });

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});