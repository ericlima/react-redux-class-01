import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "musica 1", duration: "01:00"},
    { title: "musica 2", duration: "01:01"},
    { title: "musica 3", duration: "01:02"},
    { title: "musica 4", duration: "01:03"},
    { title: "musica 5", duration: "01:04"},
    { title: "musica 6", duration: "01:05"}
  ];
};

const selectedSongReducer = (selectedSong = null, action ) => {

  if (action === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;

};

export default combineReducers({
  songs: songsReducer,
  selected: selectedSongReducer 
});
