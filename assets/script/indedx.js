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

loadCategories();

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos));
}

const videoContainer = document.getElementById('video-container');
const displayVideos = (videos) => {
    videos.forEach(video => {
        console.log(video);
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

loadVideos();



/**
 * {
      "category_id": "1001",
      "video_id": "aaaa",
      "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
      "title": "Shape of You",
      "authors": [
        {
          "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
          "profile_name": "Olivia Mitchell",
          "verified": ""
        }
      ],
      "others": {
        "views": "100K",
        "posted_date": "16278"
      },
      "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
    }
 */