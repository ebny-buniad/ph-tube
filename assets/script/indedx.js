function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => showCategories(data.categories));
}

function showCategories(categories) {
    // console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    for (const category of categories) {
        const div = document.createElement('div');
        div.innerHTML =
            `<button class="btn btn-sm hover:bg-rose-500 hover:text-white">${category.category}</button>`
        categoryContainer.appendChild(div);
    }
}

loadCategories()