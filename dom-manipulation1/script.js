// const jududl = document.getElementById('judul');
// jududl.innerHTML = 'haloha';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>';

// jududl.style.color = 'pink';
// jududl.style.backgroundColor = 'lightblue';

// // setAtribute untuk menambahkan atribut pada sebuah elemen tetapi pada saat elemen tersebut sudah memiliki atribut dan kita me setAtribute maka atribut yang lama akan terganti dengan atribut yang baru
// const p4 = document.querySelector('section#b p');
// p4.setAttribute('class', 'p4');

// //getAttribute untuk mendapatkan atribut pada elemen
// jududl.getAttribute('id');

// //removeAtribute untuk menghapus atribut pada elemen
// const a = document.querySelector('section#a a');
// a.removeAttribute('href');

const p2 = document.querySelector('.p2');

//p2.classList -> untuk menampilkan atribut apa saja yang ada di elemen tersebut

// //classList.add -> menambahkan atribut tanpa menghilangkan atribut yang lama
// p2.classList.add('label');

// //classList.remove -> menghapus atribut pada elemen
// p2.classList.remove('label');

// //untuk menambahkan atribut pada elemen jika pada elemen tersebut belum memimiliki atribut pada toggle.jika elemen pada atribut tersebut sudah memiliki atribut toggle nya maka atribut pada elemen tersebut akan dihapus
p2.classList.toggle('label');

// document.body.classList.toggle('biru-muda');

//classList.item -> untuk mencari atribut pada urutan tertentu
p2.classList.item(2)

//classList.contains -> untuk menanyakan apakah kelas yang dicari ada jika ada maka true jika tidak maka false
p2.classList.contains('dua');

//classList.replace -> untuk mengganti atribut yang lama dengan yang baru
p2.classList.replace('p2', 'halo');