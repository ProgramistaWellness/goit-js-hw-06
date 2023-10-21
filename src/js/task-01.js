const mainElement = document.querySelector('#categories');
const categories = mainElement.querySelectorAll("li.item");

console.log('Number of categories: ', categories.length)
for (const element of categories) {
    const category = element.querySelectorAll("ul");
    console.log('Category: ', element.firstElementChild.textContent);
    for (const item of category) {
        console.log('Elements: ', item.children.length);
    }
};
    