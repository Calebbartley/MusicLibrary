import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return(
        <div className="row row-spacer">
            <div className="col-md-4" style={{padding: 20}}>
                <div className="titlebar-nav">
                    <div>
                        <h1>K&M Music</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;