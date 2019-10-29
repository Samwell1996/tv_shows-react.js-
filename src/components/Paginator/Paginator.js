import React from 'react'
import '../Button/Button.css'

function Paginator({onClickPrev, onClickNext, page, total_pages}) {

    return (
        <div>
            <button className={page <= 1 ? 'red' : 'onButton'} onClick={onClickPrev} > Prev</button>
            <span>
                {page} / {total_pages}
            </span>
            <button className={total_pages <= page ? 'red' : 'onButton'} onClick={onClickNext} > Next</button>
        </div>
    )
}

export default Paginator
