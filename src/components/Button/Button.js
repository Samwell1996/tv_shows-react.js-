import React from 'react'
import './Button.css'

function Button({onClick}) {
    return (
        <div>
            <button className='onButtonChange' onClick={onClick} > Change</button>
        </div>
    )
}

export default Button
