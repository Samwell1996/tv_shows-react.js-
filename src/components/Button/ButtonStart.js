import React from 'react'
import './Button.css'

function ButtonStart({onClickRated, onClickPopular}) {
    return (
        <div>
            <button className='onButton' onClick={onClickPopular} >Go to Popular</button>
            <button className='onButton' onClick={onClickRated} >Go to Rated</button>
        </div>
    )
}

export default ButtonStart
