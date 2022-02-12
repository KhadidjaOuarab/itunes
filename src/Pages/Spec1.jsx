import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useSelector, useDispatch } from "react-redux";
import { actionAlbum, actionAlbumSearch } from "../Actions/actions";

function Spec1() {

  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const albumSearch = useSelector((state) => state.albumSearch);
  //const [albumSearch, setSearch] = useState([])
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    axios.get("https://rss.applemarketingtools.com/api/v2/fr/music/most-played/25/songs.json")
      .then((res) => dispatch(actionAlbum(res.data.feed.results)))
      .then(console.log(album));
  }, []);


  function search1() {

    //dispatch(actionAlbumSearch( album.includes(inputVal)));
    for (let i = 0; i < album.length; i++) {
      if (album[i].artistName == inputVal) {
        dispatch(actionAlbumSearch(album[i]))
        // console.log('====================================');
        // console.log(albumSearch);
        // console.log('====================================');
      }
    }

  }


  const getValue = (e) => {
    setInputVal((e.target.value))

  }

  function search() {
    dispatch(actionAlbumSearch(album.filter((el) => {
      //if no input the return the original
      if (inputVal === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.artistName.toLowerCase().includes(inputVal.toLowerCase());
      }
    })))
  };

  return (
    <div>
      <Navbar searchFunction={search} getValue={getValue} inputVal={inputVal} />
      {albumSearch.map((ele) => (<p key={ele.name}> {ele.artistName}{ele.id} </p>))}
     
    </div>
  )
}


export default Spec1;

