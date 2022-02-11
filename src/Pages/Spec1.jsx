import React, { useEffect,useState }  from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useSelector, useDispatch } from "react-redux";
import { actionAlbum,actionAlbumSearch } from "../Actions/actions";

function Spec1() {

  const dispatch = useDispatch();
  const album =  useSelector((state) => state.album);
  const albumSearch = useSelector((state) => state.albumSearch);
  //const [albumSearch, setSearch] = useState([])
  const [inputVal, setInputVal] = useState('');
  
  useEffect(() => {
    axios.get("https://rss.applemarketingtools.com/api/v2/fr/music/most-played/25/songs.json")
      .then((res) => dispatch(actionAlbum(res.data.feed.results)))
      .then(console.log(album));
  }, []);
    
  
  function search() {
    for (let i = 0; i < album.length; i++) {
      if (album[i].artistName == inputVal) {
        dispatch(actionAlbumSearch( album[i]))
        console.log('====================================');
        console.log(albumSearch);
        console.log('====================================');
      }
    }
    
  }

  
  const getValue = (e) => {
    setInputVal((e.target.value))

  }
  return (
    <div>
      <Navbar searchFunction={search} getValue={getValue} type="text" inputVal={inputVal} />
      <p>{albumSearch.artistName}</p>
    </div>
  )
}


export default Spec1;

