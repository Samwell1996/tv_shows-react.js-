import config from '../config';

function getApiDetails(id) {
    return `${config.BASE_URL}${id}?api_key=${config.KEY}&language=${config.LANGUAGE}`;

}

export default getApiDetails
