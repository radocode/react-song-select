import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// this is a convention method, this will go into the
// connect function parameter to wire the state into props we can use

const mapStateToProps = state => {
  return { songs: state.songs };
};

// redux library returns a second function so thats why it has ()()
export default connect(mapStateToProps, { selectSong })(SongList);
