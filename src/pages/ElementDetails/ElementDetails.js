import React,{useState} from 'react';
import '../../App.css';
import {useFetch} from '../../hooks';
import {Loader} from '../../components';
import {getApiDetails} from "../../utils";
import ButtonStart from '../../components/Button/ButtonStart'

function ElementDetails({params, onGoTo}) {
    const [page] = useState(1);
    const [data, loading] = useFetch(
        getApiDetails(params.id),
        page
    );
    const src = `https://image.tmdb.org/t/p/w300${data.poster_path}`;

    function onGoToSeasonDesc(event, season_number) {
        event.preventDefault();
        onGoTo(`SeasonDesc`, {id:params.id, season_number});

    }
    function getStartPopular(event) {
        event.preventDefault();
        onGoTo(`PopularTV`);
    }
    function getStartRated(event) {
        event.preventDefault();
        onGoTo(`RatedTV`);
    }

    return (
        <div className='ShowTV'>
            <div >
                {loading ? (
                    <Loader/>
                ) : (
                    <div className="contentElement">
                        <h1>{data.original_name}</h1>
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
                                   Season: {data.number_of_seasons}
                                </span>
                                <span>
                                    Episodes: {data.number_of_episodes}
                                </span>
                        </div>
                        <ul className="ulElement">
                            {data.seasons.map(({name, id, season_number}) => (
                                <li className="liElement" key={id} onClick={(e)=>onGoToSeasonDesc(e, season_number)}>
                                    {name}
                                </li>

                            ))}
                        </ul>
                        <ButtonStart onClickPopular={getStartPopular} onClickRated={getStartRated}/>
                    </div>
                )}
            </div>
        </div>
    );
}
export default ElementDetails
