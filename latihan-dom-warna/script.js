const button = document.getElementById('tblUbahWarna')

button.onclick = function () {
    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
button.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    //math.round()digunakan untuk membulatkan hasil math random
    //method pembulatan Math.random || Math.ceil => pembulatan ke atas || Math.floor => pembulatan kebawah
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});