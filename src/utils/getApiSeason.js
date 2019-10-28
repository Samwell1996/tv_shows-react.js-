import config from '../config';

function getApiSeason(id, season_number) {

    return `${config.BASE_URL}${id}/season/${season_number}?api_key=${config.KEY}&language=${config.LANGUAGE}`;


}

export default getApiSeason
