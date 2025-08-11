import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    hideLoadMoreButton,
    showLoadMoreButton
} from "./js/render-functions.js";

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

let query = '';
let page = 1;
let totalPages = 0;

const form = document.querySelector('.form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    query = e.target.elements['search-text'].value.trim();
    page = 1;
    if (!query) {
        izitoast.warning({
            title: 'Attention',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesByQuery(query, page);
        const { hits, totalHits } = data;
        if (data.hits.length === 0) {
            izitoast.error({
                title: 'No results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })
            return;
        }
        createGallery(data.hits);
        totalPages = Math.ceil(totalHits / 15);
        if (page < totalPages) {
            showLoadMoreButton();
        };
    } catch (error) {
        izitoast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
    
    } finally {
        hideLoader();
    }

});

loadMoreBtn.addEventListener('click', async (e) => {
    page += 1;
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);
        const { hits } = data;

        createGallery(hits);
        smoothScroll();

        if (page > totalPages) {
            hideLoadMoreButton();
            izitoast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            })
        } 
    } catch (error) {
        izitoast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
    
    } finally {
        hideLoader();
    }
})

function smoothScroll() {
    const itemHeight = galleryContainer.firstElementChild.getBoundingClientRect().height;

    window.scrollBy({
        top: itemHeight * 2,
  behavior: "smooth",
});
}