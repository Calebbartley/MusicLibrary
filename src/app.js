import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Song from './Components/song/Song';
import axios from 'axios';
import './app.css';


class App extends Component{


    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
         this.state={
            library:[{id:'',title:'',artist: '',genre:'',album: '',releaseDate: ''}],
            songNumber:0,
            songSearch:''
        }
    }
    handleChange(e){
        this.setState({
            [this.state.library]:e.target.value
        })
        console.log('read')
    }

    componentDidMount(){
        this.makeGetRequest();
        console.log('mounted')
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
            console.log(response.data)
            this.setState({
                library:response.data
            })

        }
        catch (ex) {
            console.log(`error in api call`);
        }
    }

    songFilter(){
        let art = this.state.library.filter(()=> {
            if(art === this.state.library){
                return true
            }
            return art
        })

    }

    render(){
        const songFilter = this.state.songFilter
        return(

            <div className="App">
                <h1>K&M Music List</h1>
                <input className="input" onChange={this.handleChange} value={songFilter}/>
                <br></br><br></br>
                <Song library={this.state.library}/>
                <br></br><br></br>
            </div>
        )
    }
}
// <Song library={this.state.library}/>
// <input className="input" type="text" placeholder="Search" />
// <button onClick={this.state.library.title}>Title</button>
//                 <button onClick={this.state.library.artist}>Artist</button>
//                 <button onClick={this.state.library.genre}>Genre</button>
//                 <button onClick={this.state.library.album}>Album</button>
//                 <button onClick={() => this.state.library.releaseDate()}>Release Date</button>

// <Song library={this.state.library} previousSong={() => this.previousSong()}  nextSong={() => this.nextSong()}/>

export default App;