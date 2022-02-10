export const setInputVal= (inputVal) => {
    return {
      type: "SETINPUTVAL",
      payload: inputVal,
    };
  };
  
  export const setAlbum = (list) => {
    return {
      type: "SETAlbum",
      payload: list,
    };
  };
  
  