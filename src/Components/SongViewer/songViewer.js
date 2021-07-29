import React from 'react';

const SongViewer = (props)=> {
    return(
        <ol>
            {props.state.library.map((music) =>(
                <li>{music}</li>
            ))}
        </ol>
    );
}

export default SongViewer
