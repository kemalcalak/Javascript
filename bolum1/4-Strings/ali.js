console.log('Merhaba Dünya');


let email ="kemalcalak@gmail.com";
console.log(email);

//Birleştirme

let ad = "Ali Kemal";
let soyad ="Çalak";
let adSoyad= ad + " " +soyad;
console.log(adSoyad);


//Karakterleri Çekme

console.log(adSoyad[2]);

//Kaç Karakter

console.log(adSoyad.length);
// if(adSoyad.length > 0)
// {
    
// }

//Methodlar

console.log(adSoyad.toUpperCase());
let kucukAdSoyad=adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);

let index=adSoyad.indexOf('B');
console.log("B nin bulundugu index:" +index);