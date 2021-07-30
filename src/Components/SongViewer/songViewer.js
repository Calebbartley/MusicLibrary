import React from 'react';
import './songViewer.css';

const SongViewer = (props)=> {
    return(
        
        <div>
            {props.library.map((songViewer, index) => (
                <p>Filter By:</p>,
                <button onClick={songViewer.title}>Title</button>,
                <button onClick={songViewer.artist}>Artist</button>,
                <button onClick={songViewer.genre}>Genre</button>,
                <button onClick={songViewer.album}>Album</button>,
                <button onClick={songViewer.releaseDate}>Release Date</button>
            ))}
         </div>
    )
}

export default SongViewer
