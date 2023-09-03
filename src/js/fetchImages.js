import axios from "axios";

export async function fetchImages(name) {
  const options = {
            params: {
                key: '39125221-1f7d496f02856d1b2d986a210',
                q: name ,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: page,
                per_page: 40,
            },
        }
        const baseUrl = 'https://pixabay.com/api/';
        const resp = await axios.get(baseUrl, options)
    return resp
    } 