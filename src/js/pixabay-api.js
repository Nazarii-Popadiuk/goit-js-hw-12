import axios from 'axios';


const myKey = '51685894-420173baf9b205d39b44ad1de';
const baseUrl = 'https://pixabay.com/api/';
const perPage = 15;


export async function getImagesByQuery(query, page = 1) {
    const params = {
        q: query,
        key: myKey,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
    }


    const response = await axios.get(baseUrl, { params });
    return response.data;
}