let ogrenci={
    ad:'ali',
    yas:20,
    email:'kemalcalak@gmail.com',
    sinif:2,
    dersler:['matematik','fizik','kimya'],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
};

ogrenci.login();
ogrenci.logout();
