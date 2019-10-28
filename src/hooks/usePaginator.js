// import '../components/Button/Button.css'

const usePaginator = (page, setPage, data) =>
{
    // const onButtonChange = ['onButtonChange'];

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
        // if(newPage == 0) {
        //     onButtonChange.push('red')
        // }
    }
    return [onGetNext, onGetPrev];

};

export default usePaginator
