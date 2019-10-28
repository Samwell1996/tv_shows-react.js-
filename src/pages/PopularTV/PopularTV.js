import React, {useState} from 'react';
import '../../App.css';
import {useFetch, usePaginator} from '../../hooks';
import {Loader, Button, Paginator} from '../../components';
import {getApiUrl} from '../../utils';

function PopularTV({onGoTo}) {

    const [page, setPage] = useState(1);
    const [data, loading] = useFetch(
        getApiUrl(`popular`, page),
        page
    );
    const [onGetNext, onGetPrev] = usePaginator(
        page,
        setPage,
        data
    );

    function onGoToRatedTV(event) {
        event.preventDefault();
        onGoTo(`RatedTV`);

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
                        <h1>Popular TV</h1>
                            <ul>
                                {data.results.map(({original_name, id}) => (
                                    <li key={id} onClick={(e)=>onGoToDetails(e, id)}>
                                        {original_name}
                                    </li>

                                ))}
                            </ul>
                        <Button onClick={onGoToRatedTV}/>
                        <Paginator onClickNext={onGetNext} onClickPrev={onGetPrev} page={page} total_pages={data.total_pages}/>
                    </div>

                )}
        </div>
    );
}
export default PopularTV
