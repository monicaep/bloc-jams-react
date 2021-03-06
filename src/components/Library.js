import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className="library">
          {
            this.state.albums.map( (album, index) =>
              <Link id="albumLink" to={`/album/${album.slug}`} key={index}>
              <table id="albums">
                <tbody>
                  <tr>
                    <td id="albumCover"> <img src={album.albumCover} alt={album.title} /> </td>
                    <td id="albumInfo">
                      <div id="albumTitle">{album.title}</div>
                      <div>{album.artist}</div>
                      <div>{album.songs.length} songs</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </Link>
            )
          }
      </section>
    );
  }
}

export default Library;
