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