import {useState, useEffect} from 'react'

const useFetch = (url, ...params) =>
{

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        }

        useEffect(() => {
            fetchUrl();
        }, params);
        return [data, loading];

    };

export default useFetch
