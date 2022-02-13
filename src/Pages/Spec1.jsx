import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useSelector, useDispatch } from "react-redux";
import { actionAlbum, actionAlbumSearch, actionPanier } from "../Actions/actions";
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Spec1() {

  const dispatch = useDispatch();
  const panierTab = useSelector((state) => state.panierTab);
  const albumSearch = useSelector((state) => state.albumSearch);
  const album = useSelector((state) => state.album);
  const [inputVal, setInputVal] = useState('');
  const [position, setPosition] = useState('right');
  const [modalIsOpen, setModalIsOpen] = useState(false)

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


  return (
    <div>
      <div>
        <Navbar panierParam={() => setModalIsOpen(true)}
          position={position} deleteFunction={deleteFunction} searchFunction={search} getValue={getValue} inputVal={inputVal} />
        <div className='album'>
          {albumSearch.map((ele) => (<Card key={ele.id} kind={ele.kind}
            artisteName={ele.artistName} name={ele.name} picture={ele.artworkUrl100}
            AddPanier={() => {
              dispatch(actionPanier([...panierTab, ele]))
            }}

          />))}
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}  >
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Artiste Name</th>
              <th>Price</th>
            </tr>

            {panierTab.map((ele) => (
              <tr key={ele.id}>
                <td> {ele.name}</td>
                <td> {ele.artistName}</td>
                <td></td>
              </tr>
            ))}
          </table>
          Total price: 111111$<p>Number of items :{panierTab.length}</p>
         
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Fermer</button>
        </div>
      </Modal>
    </div>)
}


export default Spec1;

