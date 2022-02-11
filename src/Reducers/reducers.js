const initialState = {
    album: [],
    albumSearch : []
    // inputVal:""
}


const reducers=  (state = initialState, action) => {

  switch (action.type) {
    // case "actionInputVal":
    //   console.log(action.payload);
    //   return { ...state, inputVal: action.payload };

    case "actionAlbum":
      console.log(action.payload);
      return { ...state, album: action.payload };
    case "actionAlbumSearch":
        console.log(action.payload);
        return { ...state, albumSearch: action.payload };
    

    default:
      return state;
  }
}


export default reducers;