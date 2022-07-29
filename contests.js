const list = document.querySelector('.contests__list');
const moreBtn = document.querySelector('.contests__more-btn');
let itemsQuantity = 4;
let data = [];

fetch('https://kontests.net/api/v1/all')
    .then(res => res.json())
    .then(res => {
        data = res;
        renderItems();
    });

moreBtn.addEventListener('click', function () {
    itemsQuantity += 4;
    renderItems();
});

function renderItems() {
    list.innerHTML = '';
    for (let i = 0; i < itemsQuantity; i++) {
        const { name, site, url, duration, end_time, start_time } = data[i];
        list.innerHTML += `<li class="contests__item"><h3 class="contests__item-title">${name}</h3><a href="${url}" class="contests__item-site">${site}</a><p class="contests__item-duration">${duration}</p><div class="contests__item-time"><p class="contests__item-start">${start_time}</p><p class="contests__item-end">${end_time}</p></div></li>`
    }
}