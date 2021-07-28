import React from 'react';


const musicList = (props) => {



    return (
         <ol>

            {props.musicList.map((song) => (
                <li><p>{song}</p></li>
            ))}



        </ol>
    )
}


export default musicList;