const section = document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children));

Array.from(section.children).forEach(child=>{
    child.classList.add('error');
});

const h2 = document.querySelector('h2');
console.log(h2.parentElement);
console.log(h2.parentElement.parentElement);
console.log(h2.nextElementSibling);
console.log(h2.previousElementSibling);


console.log(h2.nextElementSibling.parentElement.children);