const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('success');
icerik.classList.remove('error');

const pdegeri = document.querySelectorAll('p');

pdegeri.forEach(p=>{
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }else if(p.textContent.includes('error')){
        p.classList.add('error');
    }
});