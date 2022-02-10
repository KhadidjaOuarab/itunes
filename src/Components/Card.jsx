import React from 'react'

function Card({ artisteName,name }) {
    
    return (
       
        <div className='card'>

            <p >{artisteName}</p>
            <p >{name}</p>

        </div>
    )
}

export default Card