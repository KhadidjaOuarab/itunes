import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useSelector, useDispatch } from "react-redux";
import { actionAlbum, actionAlbumSearch, actionPanier } from "../Actions/actions";

function Spec1() {

  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const albumSearch = useSelector((state) => state.albumSearch);
  const panier = useSelector((state) => state.panier);
  const [inputVal, setInputVal] = useState('');
  const [position, setPosition] = useState('right');
 
  useEffect(() => {
    axios.get("https://rss.applemarketingtools.com/api/v2/fr/music/most-played/25/songs.json")
      .then((res) => dispatch(actionAlbum(res.data.feed.results)))
      .then(console.log(album));
  }, []);


  const getValue = (e) => {
    setInputVal((e.target.value))

  }
  function deleteFunction() {
    setInputVal('')
  }
  function search() {
   
    dispatch(actionAlbumSearch(album.filter(
      (ele) => { 
        if (inputVal === "") {
          return ele;
        }
        else {
          return ele.artistName.toLowerCase() === (inputVal.toLowerCase());
        }
      })));
    setInputVal('')
    setPosition('left')
  };
  //*************************************************************************************** */
function AddPanier() {
  
}
  
  return (
    <div>
      <Navbar position={position} deleteFunction={deleteFunction} searchFunction={search} getValue={getValue} inputVal={inputVal} />
      <div className='album'>
        {albumSearch.map((ele) => (<Card key={ele.id} kind={ele.kind} 
        artisteName={ele.artistName} name={ele.name} picture={ele.artworkUrl100}
        AddPanier={ (e) => {  
          dispatch(actionPanier(ele))
        }}

        />))}
      </div>
    </div>
  )
}


export default Spec1;

