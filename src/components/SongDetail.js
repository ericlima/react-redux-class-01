import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    console.log(this.props);
    const { song } = this.props;

    if (!song) {
      return <div>Select a song</div>;
    }
    return (
      <>
        <div>{song.title}</div>
        <div>{song.duration}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selected };
};

export default connect(mapStateToProps)(SongDetail);
