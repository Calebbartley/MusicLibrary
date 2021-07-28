import React, { Component } from 'react';
import TitleBar from './Components/Title/TitleBar';
import musicList from './Components/MusicTable/musicTable';
import axios from 'axios';

import './app.css';


const api = axios.create({
    baseURL:'http://www.devcodecampmusiclibrary.com/'
})




class App extends Component{

    state= {
        library:[]
    }
    constructor(props){
        super(props);
        api.get('/').then(res =>{
            console.log(res.data)
            this.setState({library: res.data})
        })
    }

    createLib = async ()=>{
        let res = await api.post('/',{title:'',id: '',author:''})
        console.log(res)
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
            {this.state.library.map(lib => <h1 key={lib.id}>{lib.title}</h1>)}
                <musicList musicList={this.state.listOfSongs}/>
                <TitleBar/>
                <button onClick={this.makeGetRequest}>Remake</button>
                <h1>Hello World</h1>
            </div>
        )
    }
}


export default App;