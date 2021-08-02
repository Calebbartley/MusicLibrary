import React from 'react';
import './Song.css'
const Song = (props) => {
    return (

        <div className="h1">
            {props.library.map((song, index) => (
            <span>

                <h1>{song.title}</h1>
                <p>{song.artist} </p>
                <p>{song.releaseDate}</p>
                <p>{song.genre} </p>
                <p>{song.album}</p>
                <br></br>
            </span>
            ))}

        </div>
    );
}

export default Song;