import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Song from "./Components/song/Song";
import axios from "axios";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      library: [
        {
          id: 1,
          title: "",
          artist: "",
          genre: "",
          album: "",
          releaseDate: "",
        },
      ],

      songSearch: "",
    };
  }
  handleChange(e) {
    this.setState({
      songSearch: e.target.value
    });
    console.log(this.state.songSearch)
  }

  componentDidMount() {
    this.makeGetRequest();
    console.log("mounted");
  }

  async makeGetRequest() {
    try {
      let response = await axios.get("http://localhost:5000/api/songs");
      console.log(response.data);
      this.setState({
        library: response.data,
      });
    } catch (ex) {
      console.log(`error in api call`);
    }
  }

//   lister() {
//     // this.state.library.filter((song) => song[] === '').map((song) => <li key={song.id}>{song.title}</li>);
//   }

  render() {
    const songSearch = this.state.songSearch

    return (
      <div className="App">
        <h1>K&M Music List</h1>
        
        <input
          className="input"
          value={songSearch}
          onChange={this.handleChange}
        />
            <ul>
            {
                (this.state.library.filter((song) => song.title === this.state.songSearch).map((song) => <li key={song.id}>{song.title}{song.album}{song.artist}{song.genre}{song.releaseDate}</li>)) ||
                (this.state.library.filter((song) => song.album === this.state.songSearch).map((song) => <li key={song.id}>{song.title}{song.album}{song.artist}{song.genre}{song.releaseDate}</li>)) ||
                (this.state.library.filter((song) => song.artist === this.state.songSearch).map((song) => <li key={song.id}>{song.title}{song.album}{song.artist}{song.genre}{song.releaseDate}</li>))||
                (this.state.library.filter((song) => song.genre === this.state.songSearch).map((song) => <li key={song.id}>{song.title}{song.album}{song.artist}{song.genre}{song.releaseDate}</li>))||
                (this.state.library.filter((song) => song.releaseDate === this.state.songSearch).map((song) => <li key={song.id}>{song.title}{song.album}{song.artist}{song.genre}{song.releaseDate}</li>))
            }
            </ul>

        <Song library={this.state.library}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
// <Song library={this.state.library}/>
// <input className="input" type="text" placeholder="Search" />
// <button onClick={this.state.library.title}>Title</button>
//                 <button onClick={this.state.library.artist}>Artist</button>
//                 <button onClick={this.state.library.genre}>Genre</button>
//                 <button onClick={this.state.library.album}>Album</button>
//                 <button onClick={() => this.state.library.releaseDate()}>Release Date</button>

// {this.state.array
//     .filter((animal) => animal.name[0] === "d")
//     .map((animal) => (
//       <li key={animal.id}>{animal.name}</li>
//     ))}

// <Song library={this.state.library} previousSong={() => this.previousSong()}  nextSong={() => this.nextSong()}/>

export default App;
