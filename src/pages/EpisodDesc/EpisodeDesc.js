import React, {useState} from 'react';
import '../../App.css';
import {useFetch} from '../../hooks';
import {Loader} from '../../components';
import {getApiEpisode} from "../../utils";
import ButtonBack from "../../components/Button/ButtonBack";


function EpisodeDesc({params, onGoTo}) {
    const [page] = useState(1);
    const [data, loading] = useFetch(
        getApiEpisode(params.id, params.season_number, params.episode_number),
        page
    );
    const src = `https://image.tmdb.org/t/p/w300${data.still_path}`;

    function getBackToStart(event, episode_number) {
        event.preventDefault();
        onGoTo(`SeasonDesc`, {id:params.id, season_number:params.season_number, episode_number});
    }

    return (
        <div className='ShowTV'>
            <div >
                {loading ? (
                    <Loader/>
                ) : (
                    <div>
                        <div className="contentElement">
                            <h1>{data.name}</h1>
                            <div className='topElement'>
                            <span>
                                <img src={src} alt="Poster"/>
                            </span>
                                <div className="description">
                                    {data.overview}
                                </div>
                            </div>
                            <div className="manySS">
                                <span>
                                   Season: {data.season_number}
                                </span>
                                <span>
                                    Episodes: {data.episode_number}
                                </span>
                            </div>
                            <ButtonBack onClick={getBackToStart}/>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
export default EpisodeDesc
