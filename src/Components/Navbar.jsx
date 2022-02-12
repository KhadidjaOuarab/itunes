import React from 'react'
import '../App.css'
import imag from '../Assets/panier.png'
// import { Link } from 'react-router-dom'
function Navbar({searchFunction,inputVal,getValue,deleteFunction,position}) {
    return (
        <div className='navbar'>
            <p className='logo'>LOGO</p>
            <div className='navbarInput'>
                <div className={position}>
                <input type='text' className='inputSearch' onChange={getValue} type="text" value={inputVal}/>
                <input type='submit' value='Effacer' onClick={deleteFunction} className='effacer' />
                <input type='submit' value='Rechercher' className='effacer' onClick={searchFunction} />
                </div>
                <img src={imag} className='panier' />
            </div>

        </div>
    )
}

export default Navbar