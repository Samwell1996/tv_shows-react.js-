import config from '../config';

function getApiUrl(tvShows, page) {
    return `${config.BASE_URL}${tvShows}?api_key=${config.KEY}&language=${config.LANGUAGE}&page=${page}`;
}

export default getApiUrl
