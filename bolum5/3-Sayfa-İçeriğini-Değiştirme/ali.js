// const pdegeri = document.querySelector('p');
// console.log(pdegeri.innerText);

// pdegeri.innerText = 'Bu bir paragraf değişikliğidir.';

// const paragraflar = document.querySelectorAll('p');
// paragraflar.forEach(function(paragraf){
//     paragraf.textContent += ' Yeni eklendi.';
// });

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);
icerik.innerHTML = '<h2>Yeni içerik</h2>';
icerik.innerHTML += '<p>Yeni paragraf</p>';

const ogrenciler = ['Ali','Veli','Ayşe','Fatma'];

ogrenciler.forEach(function(ogrenci){
    icerik.innerHTML += `<p>${ogrenci}</p>`;
});