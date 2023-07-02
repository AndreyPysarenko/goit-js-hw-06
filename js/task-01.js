const allCategories = document.querySelector('#categories');


const counterAllCategories = allCategories.children.length;

console.log('Number of categories:', counterAllCategories);
console.log('');

const nameCategories = [...allCategories.children].forEach((child) => {
    console.log('Category:', child.firstElementChild.textContent);
    console.log('Elements:', child.lastElementChild.children.length);
    console.log('');
    });;


