const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.google.com');
link.innerText = 'Google';

const pdegeri = document.querySelector('p');
console.log(pdegeri.getAttribute('class'));
pdegeri.setAttribute('class','success');
pdegeri.setAttribute('style','color:green');
console.log(pdegeri.getAttribute('class'));