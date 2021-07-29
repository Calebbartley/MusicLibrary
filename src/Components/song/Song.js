import React from 'react';
const Song = (props) => {
    return (
        <div>
        {props.library.map((song, index) => (
            <p> {song.title} | {song.artist} | {song.releaseDate} |{song.genre} | {song.album} </p>
        ))}
        </div>
        );

        // <ul>
        //     {props.library.map((data)=>(
        //         <li key={data.id}>
        //             <p>{data.title}</p>
        //             <p>{data.artist}</p>
        //         </li>
        //     ))}
        // </ul>

        // <div className="songs">
        //     <h1>{props.library.title}</h1>
        //     <h2>{props.library.artist}</h2>
        //     <p>{props.library.genre}</p>
        //     <p>{props.library.album}</p>
        //     <p>{props.library.releaseDate}</p>
        // </div>
     
}

export default Song;