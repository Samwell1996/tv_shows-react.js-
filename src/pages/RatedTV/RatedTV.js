import React, {useState} from 'react'
import '../../App.css'
import {useFetch} from '../../hooks'
import {Loader, Button, Paginator} from '../../components'
import {getApiUrl} from '../../utils'

function RatedTV({onGoTo}) {

    const [page, setPage] = useState(1);
    const [data, loading] = useFetch(
        getApiUrl(`top_rated`, page),
        page
    );

    function onGoToPopularTV(event) {
        event.preventDefault();
        onGoTo(`PopularTV`);

    }
    function onGetNext() {
        let newPage = page + 1;
        if( page < data.total_pages ) {
            setPage(newPage);
        }
    }
    function onGetPrev() {
        let newPage = page - 1;
        if( page > 1) {
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
                        <h1>Rated TV</h1>
                        <ul>
                            {data.results.map(({original_name}) => (
                                <li>
                                    {original_name}
                                </li>

                            ))}
                        </ul>
                        <Button onClick={onGoToPopularTV}/>
                        <Paginator onClickNext={onGetNext} onClickPrev={onGetPrev} page={page} total_pages={data.total_pages}/>
                    </div>

                )}
            </div>

        </div>
    )
}

export default RatedTV
