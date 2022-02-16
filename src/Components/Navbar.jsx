import React, { useState } from 'react'
import '../App.css'
import imag from '../Assets/panier.png'
import SearchImage from '../Assets/search.png'
import { Link } from "react-router-dom";

function Navbar({ Logo, searchFunction, inputVal, getValue, deleteFunction, position, panierParam }) {


    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className='navbarInput'>
                    <div className={position}>
                        <input type='text' placeholder="Search songs.." className='inputSearch' onChange={getValue} value={inputVal} />
                        <button type='submit' className='delete' onClick={deleteFunction}  >
                          X
                        </button>
                        <button type='submit' className='search'  onClick={searchFunction} >
                            <img src={SearchImage} />
                        </button>
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