import React from 'react'
import './Button.css'

function ButtonBack({onClick}) {
    return (
        <div>
            <button className='onButton' onClick={onClick} >Back</button>
        </div>
    )
}

export default ButtonBack
