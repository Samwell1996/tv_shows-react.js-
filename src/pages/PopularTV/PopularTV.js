import React, {useState} from 'react'
import '../../App.css'
import {useFetch} from '../../hooks'
import {Loader, Button, Paginator} from '../../components'
import {getApiUrl} from '../../utils'

function PopularTV({onGoTo}) {

    const [page, setPage] = useState(1);
    const [data, loading] = useFetch(
        getApiUrl(`popular`, page),
        page
    );

    function onGoToRatedTV(event) {
        event.preventDefault();
        onGoTo(`RatedTV`);

    }
    function onGetNext() {
        let newPage = page + 1;
        if( page < data.total_pages ) {
            setPage(newPage);
        }
    }
    function onGetPrev() {
        let newPage = page - 1;
        if( page > 1 ) {
            setPage(newPage);
        }
    }
    return (
        <div className='ShowTV'>
            <div >
                {loading ? (
                    <Loader/>
                ) : (
                    <div>
                        <h1>Popular TV</h1>
                            <ul>
                                {data.results.map(({original_name}) => (
                                    <li >
                                        {original_name}
                                    </li>

                                ))}
                            </ul>
                        <Button onClick={onGoToRatedTV}/>
                        <Paginator onClickNext={onGetNext} onClickPrev={onGetPrev} page={page} total_pages={data.total_pages}/>
                    </div>

                )}
            </div>

        </div>
    );
}
export default PopularTV
