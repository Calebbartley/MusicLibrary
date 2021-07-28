import React, { Component } from 'react';
import TitleBar from './Components/Title/TitleBar';
import axios from 'axios';
import './app.css';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOfSongs:[]
        }
    }
    
    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get(`http://www.devcodecampmusiclibrary.com/`);
            console.log(response.data)
        }
        catch (ex) {
            console.log(`error in api call`);
        }
    }

    render(){
        return(
            <div className="app">
                <TitleBar/>
                <button onClick={this.makeGetRequest}>Remake</button>
                <h1>Hello World</h1>
            </div>
        )
    }
}


export default App;