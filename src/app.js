import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import TitleBar from './Components/Title/TitleBar';
import Song from './Components/song/Song';
// import musicList from './Components/MusicTable/musicTable';
import axios from 'axios';

import './app.css';
// import SongViewer from './Components/SongViewer/songViewer';


// const api = axios.create({
//     baseURL:'http://www.devcodecampmusiclibrary.com/'
// })




class App extends Component{


    constructor(props){
        super(props);
         this.state={
            library:[{id:'',title:'',artist: '',genre:'',album: '',releaseDate: ''}],

        }
    }

    // createLib = async ()=>{
    //     let res = await api.post('/',{title:'',id:'',author:''})
    //     console.log(res)
    // }


    nextSong(){
        let tempSongNumber= this.state.id;
        tempSongNumber++;
        if(tempSongNumber === this.state.library.length){
            tempSongNumber = 0;
        }
        
        this.setState({
            songNumber:tempSongNumber
        });
    }

    previousSong(){
        let tempSongNumber= this.state.id;
        tempSongNumber--;
        if(tempSongNumber<0){
            tempSongNumber = this.state.library.length - 1;
        }
        this.setState({
            songNumber:tempSongNumber
        });
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

    render(){
        return(

        
            <div className="App">

                <Song  library={this.state.library}/>

            </div>
        )
        // return(
        //     <div className="app">
        //
        //     {this.state.library.map(lib => <h1 key={lib.id}>{lib.title}</h1>)}
        //         <musicList musicList={this.state.listOfSongs}/>
        //         <TitleBar/>
        //         <h1>Hello World</h1>
        //     </div>
        // )
    }
}
// <button onClick={this.state.library.previousSong}>Previous Track</button>
//                 <button onClick={this.state.library.nextSong}>Next Track</button>

export default App;