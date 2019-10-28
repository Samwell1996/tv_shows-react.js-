import config from '../config';

function getApiEpisode(id, season_number, episode_number) {

    return `${config.BASE_URL}${id}/season/${season_number}/episode/${episode_number}?api_key=${config.KEY}&language=${config.LANGUAGE}`;


}

export default getApiEpisode
