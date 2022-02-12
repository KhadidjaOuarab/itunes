import React from 'react'

function Card({ artisteName,name , picture, kind}) {
    
    return (
       
        <div className='card'>
            <img className='img' src={picture} />
            <p>{kind}</p>
            <p >{artisteName}</p>
            <p >{name}</p>
           
        </div>
    )
}

export default Card