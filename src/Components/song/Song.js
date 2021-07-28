import React from 'react';
const Song = (props) => {
    return (


        // <ol>
        //     {props.libraryarr.map((songs)=>(
        //         <li>{songs}</li>
        //     ))}
        // </ol>
        <div className="songs">
            <h1>{props.library[0].title}</h1>
            <h2>{props.library[0].artist}</h2>
            <p>{props.library[0].genre}</p>
            <p>{props.library[0].album}</p>
            <p>{props.library[0].releaseDate}</p>
        </div>
     );
}

export default Song;