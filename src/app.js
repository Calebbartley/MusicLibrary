import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import Song from "./Components/song/Song";
import axios from "axios";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      library: [
        {
          id: "",
          title: "",
          artist: "",
          genre: "",
          album: "",
          releaseDate: "",
        },
      ],
      songNumber: 0,
      array: [
        { id: 1, name: "cat" },
        { id: 2, name: "dog" },
        { id: 3, name: "horse" },
        { id: 4, name: "chicken" },
        { id: 5, name: "duck" },
      ],
      songSearch: "",
    };
  }
  handleChange(e) {
    this.setState({
      song: this.state.library,
    });
    console.log();
    return this.setState.song;
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



  lister() {
    this.state.library
      .filter((song) => song[2] === 'd')
      .map((song) => <li key={song.id}>{song.title}</li>);
  }

  render() {
    const lister = this.state.lister;
    return (
      <div className="App">
        <h1>K&M Music List</h1>
        <input
          className="input"
          value={lister}
          onChange={this.handleChange}
        />
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
