import React from 'react'
import Loader from '../../components/Loader/Loader'
import '../../App.css'
import {useFetch} from '../../hooks/useFetch'

function getApiUrl(id) {
    return `https://api.themoviedb.org/3/tv/${id}?api_key=3eea6bcfa2450c59826506df72dab025&language=en-US`;
}


function SeasonDesc() {

    const [data, loading] = useFetch(
        getApiUrl(`tv_id`)
    );

    return (
        <div className='ShowTV'>
            <div >
                {loading ? (
                    <Loader/>
                ) : (
                    <div>
                        desc
                    </div>

                )}
            </div>
        </div>
    );
}
export default SeasonDesc
