const initialState = {
  album: [],
  albumSearch: [],
  panierTab: [],
  price : 0
}


const reducers = (state = initialState, action) => {

  switch (action.type) {

    case "actionAlbum":
      return { ...state, album: action.payload };
    case "actionAlbumSearch":
      console.log(action.payload);
      return { ...state, albumSearch: action.payload };
    case "actionPanier":  
      console.log(state.panierTab);   
   
      return { ...state, panierTab: action.payload };
    

    default:


      return state;
  }
}


export default reducers;