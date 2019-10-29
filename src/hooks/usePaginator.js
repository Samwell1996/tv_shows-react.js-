const usePaginator = (page, setPage, data) =>
{


    function onGetNext () {
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
    return [onGetNext, onGetPrev];

};

export default usePaginator
