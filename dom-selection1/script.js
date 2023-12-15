//DOM selection
//getElementById -> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'tora';

//document.getElementByTagName() -> mengembalika HTMLCollections jika menggunakan  get elementByTagName maka saat di cek di konsole setiap element tah nya akan mempunyai urutan array.jika ingin  mengedit semua element nya dengan style yang sama maka bisa menggunakan looping tidak bisa menggunakan syntax seperti getElementById atau mengeditnya dengan memanggil array nya satu persatu 
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "green";
    
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize =  "50px";

// p[3].style.backgroundColor = "green";

//document.getElementByClassName() -> mengeembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ganti coy';