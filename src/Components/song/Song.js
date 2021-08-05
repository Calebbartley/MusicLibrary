import React from 'react';
import './Song.css'
const Song = (props) => {
    return (

        <div className="h1">
            {props.library.map((song, index) => (
            <span>

                <h1>Title: {song.title}</h1>
                <h1>Artist: {song.artist} </h1>
                <h3>Album: {song.album}</h3>
                <h3>Genre: {song.genre} </h3>
                <h3>Release Date: {song.releaseDate}</h3>
                
                <br></br>
            </span>
            ))}

        </div>
    );
}

export default Song;