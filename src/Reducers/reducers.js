const initialState = {
  album: [],
  albumSearch: [],
  panierTab: []
}


const reducers = (state = initialState, action) => {

  switch (action.type) {

    case "actionAlbum":
      //      console.log(action.payload);
      return { ...state, album: action.payload };
    case "actionAlbumSearch":
      console.log(action.payload);
      return { ...state, albumSearch: action.payload };
    case "actionPanier":  
    console.log('99999999999999999999999999999999');
    console.log(state.panierTab);   
    console.log('99999999999999999999999999999999');
      return { ...state, panierTab: action.payload };


    default:


      return state;
  }
}


export default reducers;