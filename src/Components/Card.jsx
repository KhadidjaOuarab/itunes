import React from 'react'

function Card({ artisteName,name , picture, kind,AddPanier}) {
    
    return (
       
        <div className='card'>
            <img className='img' src={picture} />
            <p>{kind}</p>
            <p >{artisteName}</p>
            <p >{name}</p>
            <input type='submit' value='Ajouter' className='effacer' onClick={AddPanier} />
        </div>
    )
}

export default Card