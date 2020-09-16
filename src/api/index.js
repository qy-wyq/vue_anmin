import axio from 'axios'

const BASE_PATH = 'api';

export default {
    post: (url, params) => {
        return axio.post(`${BASE_PATH}` + url, params).then(res => res.data);
    },
    get: (url, params) => {
        return axio.get(`${BASE_PATH}` + url, { params: params }).then(res => res.data);
    },
}
