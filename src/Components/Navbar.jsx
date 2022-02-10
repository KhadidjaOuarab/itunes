import React from 'react'
import '../App.css'
import imag from '../Assets/panier.png'
// import { Link } from 'react-router-dom'
function Navbar({searchFunction,inputVal,getValue}) {
    return (
        <div className='navbar'>
            <p>LOGO</p>
            <div>
                <input type='text' className='inputSearch' onChange={getValue} type="text" value={inputVal}/>
                <input type='submit' value='Effacer' className='effacer' />
                 <input type='submit' value='Rechercher' className='effacer' onClick={searchFunction} />
                <img src={imag} className='panier' />
            </div>

        </div>
    )
}

export default Navbar