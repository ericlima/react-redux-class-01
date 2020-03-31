import React from "react";
import SongList from "./SongList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SongList />
      </div>
    );
  }
}

export default App;
