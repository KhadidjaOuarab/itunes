import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useSelector, useDispatch } from "react-redux";
import { setAlbum,setInputVal } from "../actions";
function Spec1() {

  const album =  useSelector((state) => state.album);
  const inputVal = useSelector((state) => state.inputVal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("https://rss.applemarketingtools.com/api/v2/fr/music/most-played/25/songs.json")
      .then((res) => dispatch(setAlbum(res.data.feed.results.map((el) => {return { ...el }; }))))
      .then(console.log(album));
  }, []);
    
  
  function search() {
    
  }
    function getValue() {
      
    }
  return (
    <div>
      <Navbar searchFunction={search} getValue={getValue} type="text" inputVal={inputVal} />
      {album.map((ele) => (
        <Card artisteName={ele.artistName} name={ele.name}/>

      ))}
    </div>
  )
}


export default Spec1;

