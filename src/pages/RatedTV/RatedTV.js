import React, {useState} from 'react';
import '../../App.css';
import {useFetch, usePaginator} from '../../hooks';
import {Loader, Button, Paginator} from '../../components';
import {getApiUrl} from '../../utils';

function RatedTV({onGoTo}) {

    const [page, setPage] = useState(1);
    const [data, loading] = useFetch(
        getApiUrl(`top_rated`, page),
        page
    );
    const [onGetNext, onGetPrev] = usePaginator(
        page,
        setPage,
        data
    );
    function onGoToPopularTV(event) {
        event.preventDefault();
        onGoTo(`PopularTV`);

    }
    function onGoToDetails(event, id) {
        event.preventDefault();
        onGoTo(`ElementDetails`, {id});

    }

    return (
        <div className='ShowTV'>
            {loading ? (
                    <Loader/>
                ) : (
                    <div>
                        <h1>Rated TV</h1>
                        <ul>
                            {data.results.map(({original_name, id}) => (
                                <li key={id} onClick={(e)=>onGoToDetails(e, id)}>
                                    {original_name}
                                </li>

                            ))}
                        </ul>
                        <Button onClick={onGoToPopularTV}/>
                        <Paginator onClickNext={onGetNext} onClickPrev={onGetPrev} page={page} total_pages={data.total_pages}/>
                    </div>

                )}
        </div>
    )
}

export default RatedTV
