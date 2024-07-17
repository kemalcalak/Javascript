let ogrenci={
    ad:'ali',
    yas:20,
    email:'kemalcalak@gmail.com',
    sinif:2,
    dersler:['matematik','fizik','kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=25;
console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad']='Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);

