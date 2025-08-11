import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

const lightBox = new SimpleLightBox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
});
export function createGallery(images) {
    const markup = images.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => `<li class="gallery-item">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="info">
    <p>Likes<br>${likes}</p>
    <p>Views<br>${views}</p>
    <p>Comments<br>${comments}</p>
    <p>Downloads<br>${downloads}</p>
    </div>
    </li>`).join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightBox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    loadMore.classList.add('hidden');
}