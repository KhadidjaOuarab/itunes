import { ADD_ONE } from './actions';

const initialState = {
    AlbumArtisteName: []
};

function reducer(state = initialState, action) {

switch(action.type) {

case ADD_ONE:
return {
   
    AlbumArtisteName: state.AlbumArtisteName};

console.log('-+++++++++++++++++++++++++++++++');
console.log(AlbumArtisteName);
console.log('=+++++++++++++++++++++++++++++++=');

default:
return state;
}
}
export default reducer;