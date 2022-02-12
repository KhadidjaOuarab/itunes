const initialState = {
    album: [],
    albumSearch : []
}


const reducers=  (state = initialState, action) => {

  switch (action.type) {
   
    case "actionAlbum":
//      console.log(action.payload);
      return { ...state, album: action.payload };
    case "actionAlbumSearch":
      console.log('////////////////////////////////////');
      console.log(state.albumSearch );
      console.log('////////////////////////////////////');
        return { ...state, albumSearch: action.payload };
    

    default:
     
       
      return state;
  }
}


export default reducers;