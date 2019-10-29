import React, {useState} from 'react';
import '../../App.css';
import {useFetch} from '../../hooks';
import {Loader} from '../../components';
import {getApiSeason} from "../../utils";
import ButtonBack from '../../components/Button/ButtonBack'

function SeasonDesc({params, onGoTo}) {
    const [page] = useState(1);
    const [data, loading] = useFetch(
        getApiSeason(params.id, params.season_number),
        page
    );
    const src = `https://image.tmdb.org/t/p/w300${data.poster_path}`;

    function onGoToEpisodeDesc(event, episode_number) {
        event.preventDefault();
        onGoTo(`EpisodeDesc`, {id:params.id, season_number:params.season_number, episode_number});

    }
    function getBackToStart(event,season_number) {
        event.preventDefault();
        onGoTo(`ElementDetails`, {id:params.id, season_number});
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
                                    Episodes: {data.episodes.length}
                                </span>
                        </div>
                        <ul className="ulElementSeason">
                            {data.episodes.map(({name, id, episode_number}) => (
                                <li className="liElement" key={id} onClick={(e)=>onGoToEpisodeDesc(e, episode_number)}>
                                    {name}
                                </li>

                            ))}
                        </ul>
                        <ButtonBack onClick={getBackToStart}/>
                    </div>

                    </div>
                )}
            </div>
        </div>
    );
}
export default SeasonDesc
