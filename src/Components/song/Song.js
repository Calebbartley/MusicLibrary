import React from 'react';
const Song = (props) => {
    return (
        <div>
            <h1>{props.state.library[0].title}</h1>
        </div>
     );
}
 
export default Song;