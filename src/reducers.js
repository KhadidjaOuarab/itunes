const initialState = {
    album: [],
    inputVal:""
}


const reducers=  (state = initialState, action) => {

  switch (action.type) {
    case "SETINPUTVAL":
      console.log(action.payload);
      return { ...state, inputVal: action.payload };

    case "SETAlbum":
      console.log(action.payload);
      return { ...state, album: action.payload };

    default:
      return state;
  }
}


export default reducers;