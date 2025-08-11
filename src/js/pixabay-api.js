import axios from 'axios';


const myKey = '51685894-420173baf9b205d39b44ad1de';
const baseUrl = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = {
        q: query,
        key: myKey,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }


    const response = await axios.get(baseUrl, { params });
    return response.data;
}