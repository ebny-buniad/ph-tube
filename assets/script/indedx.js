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
            `<button onclick="loadCategoryVideos(${category.category_id})" 
            class="btn btn-sm hover:bg-rose-500 hover:text-white">${category.category}</button>`
        categoryContainer.appendChild(div);
    }
}

loadCategories();

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos));
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = "";
    if (videos.length === 0) {
        videoContainer.innerHTML = `
                    <div class="col-span-full flex flex-col justify-center items-center py-28 text-center">
                        <img class="w-[120px]" src="assets/images/Icon.png" alt="">
                        <h3 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h3>
                    </div>`
    }
    videos.forEach(video => {
        // console.log(video);
        const div = document.createElement('div');
        div.innerHTML = `
                    <img class="rounded-md w-100 md:h-[220px] object-cover" src="${video.thumbnail}" alt="">
                    <div class="flex gap-4 mt-6">
                        <div>
                            <img class="w-12 h-12 object-cover rounded-full" src="${video.authors[0].profile_picture}" alt="">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold">${video.title}</h3>
                            <p class="flex gap-1 items-center">${video.authors[0].profile_name}<span><img class="w-5" src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000" alt=""></span></p>
                            <p>${video.others.views}</p>
                        </div>
                    </div>`
        videoContainer.appendChild(div)
    });
}

const loadCategoryVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayVideos(data.category));
}
