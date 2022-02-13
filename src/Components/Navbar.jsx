import React, { useState } from 'react'
import '../App.css'
import imag from '../Assets/panier.png'
import {Link } from "react-router-dom";

function Navbar({Logo, searchFunction, inputVal, getValue, deleteFunction, position, panierParam }) {


    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className='navbarInput'>
                    <div className={position}>
                        <input type='text' className='inputSearch' onChange={getValue} value={inputVal} />
                        <input type='submit' value='Effacer' onClick={deleteFunction} className='effacer' />
                        <input type='submit' value='Rechercher' className='effacer' onClick={searchFunction} />
                    </div>

                    <button onClick={panierParam} >
                        <img src={imag} className='panier' />
                    </button>

                </div>

            </nav>

        </>
    )
}

export default Navbar