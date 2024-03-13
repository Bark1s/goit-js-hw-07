const categories = document.querySelector('#categories');
const titles = categories.querySelectorAll("h2");

console.log(`Number of categories: ${categories.children.length}`);

titles.forEach(function (title) {
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const elements = title.parentElement.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
});