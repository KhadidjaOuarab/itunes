import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { connect } from 'react-redux'
function Spec1(props) {
  let dis;
  const [AlbumArtisteName, setAlbumArtisteName] = useState([])

  const [album, setAlbum] = useState([])
  const [albumSearch, setSearch] = useState([])

  useEffect(() => {
    axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json')
      .then(res => {
        setAlbum(res.data.feed.results);
        console.log(res.data.feed.results);
      })

  }
    , [])

  function searchFunction() {
    for (let index = 0; index < album.length; index++) {
      if (album[index].artistName == inputVal) {
        AlbumArtisteName.push(album[index])
      }
    }
    console.log('====================================');
    console.log(AlbumArtisteName);
    console.log('====================================');
    props.dispatch({
      type: 'ADD_ONE'
      })

  }

  const [inputVal, setInputVal] = useState('');
  const getValue = (e) => {
    setInputVal((e.target.value))

  }
  return (
    <div>
      <Navbar searchFunction={searchFunction} getValue={getValue} type="text" inputVal={inputVal} />
      {AlbumArtisteName.map((ele) => (
        <Card key={ele.id} artisteName={ele.artistName} />

      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    AlbumArtisteName: state.AlbumArtisteName
  }
}

export default connect(mapStateToProps)(Spec1);