import "./App.css";
import React, { useState } from "react";
import { ColorList } from "./ColorList";
import { Counter } from "./Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import React, { useContext, useState, createContext } from "react";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <TicTacToe />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">ColorGame</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">tic-tac-toe</Link>
          </li>
        </ul>
      </nav> */}

      {/* <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route Path="/color-game">
          <ColorList />
        </Route>
        <Route exact Path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route Path="**">
          <NotFound />
        </Route>
      </Switch> */}
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found!</h1>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fsarahkeane%2Fcollections%2F422746-Animation-Inspo&psig=AOvVaw0h5xcxbuerJM8GROMYXr9B&ust=1635779660258000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDo0Mj49PMCFQAAAAAdAAAAABAO"
        alt="404 Not Found!"
      />
    </div>
  );
}

function Welcome() {
  return <h1>welcome all🙏</h1>;
}

function MovieList() {
  const INITIAL_MOVIES = [
    {
      id: "100",
      name: "Pokemon",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_MAs1sndGC2inGmuL7OOvsDO0Wx6D0UHCg&usqp=CAU",
      rating: "9.0/10",
      description:
        "Ash Ketchum from Pallet Town is 10 years old today. This means he is now old enough to become a Pokémon Trainer. Ash dreams big about the adventures he will experience after receiving his first Pokémonfrom Professor Oak.",
    },
    {
      id: "100",
      name: "Demon Slayer",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyQdQ3dKsYGWDMfv6zmSbfgD4f_feVZpttQ&usqp=CAU",
      rating: "8.5/10",
      description:
        "Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.",
    },
    {
      id: "100",
      name: "ONE PUNCH MAN",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdH0d1ar5ryC7al6unN6lO-sP0QLq_tntKA&usqp=CAU",
      rating: "7.5/10",
      description:
        "It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength",
    },
    {
      id: "100",
      name: "Beyblade Burst",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvmmG2SKrVju5kgGSDv-eYD_O8asmj9_pJA&usqp=CAU",
      rating: "8.0/10",
      description:
        "Valt Aoi, an elementary school student, starts practising Beyblades, spinning tops enchanted with magical spirits of different creatures, to work his way up and become a world class player",
    },
    {
      id: "100",
      name: "Naruto Shippuden the Will of Fire",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAxbXvGWpJ5lK0BLK5d2cO1Z3LOHpSwetRQ&usqp=CAU",
      rating: "9.0/10",
      description:
        "Naruto Shippuden the Movie: The Will of Fire, the sixth Naruto film overall and the third Naruto: Shippuden film, takes as its basis the popular anime and manga series. Released on August 1, 2009 in theaters in Japan, it uses the advertising tagline Todoke, ore-tachi no Omoi!.",
    },
  ];

  const [movies, setMovies] = useState(INITIAL_MOVIES);

  //   const theme = createTheme({
  //     palette:{
  //       mode:"dark",

  //     }
  //   });
  //   return(
  //     <ThemeProvider theme={theme}>
  //     <div className="APP">
  //     </div>
  //     </ThemeProvider>
  //   );
  // }

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const setMovieName = (event) => setName(event.target.value);

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setDescription("");
  };

  const addMovie = () => {
    console.log({ name, poster, rating, description });

    const newmovie = { name, poster, rating, description };
    setMovies([...movies, newmovie]);
    resetMovieForm();
  };

  return (
    <section>
      <div className="add-movie-form">
        <input placeholder="Name" onChange={setMovieName} />
        <input
          placeholder="Poster url"
          onChange={(event) => setPoster(event.target.value)}
        />
        <input
          placeholder="Rating"
          onChange={(event) => setRating(event.target.value)}
        />
        <input
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={addMovie}>Add movie</button>
      </div>

      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            description={mv.description}
          />
        ))}
      </div>
    </section>
  );
}

function Movie({ name, poster, rating, description }) {
  const [show, setShow] = useState(false);
  // const styles = { display: show ? "block" : "none" };
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-details">
        <h2 className="movie-name">{name}</h2>
        <p className="movie-rating">⭐{rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "show"} description
      </button>
      {/* <p style={styles}>{description}</p> */}
      {show ? <p>{description}</p> : ""}

      <Counter />
    </div>
  );
}



function TicTacToe() {
  return (
  <div>
    <GameBox/>
    <GameBox/>
    <GameBox/>
    <GameBox/>
    <GameBox/>
    <GameBox/>
    </div>
    )}

function GameBox(){
  const [value,setValue]=useState("")
  return (
  <div
   onClick={()=>setValue(value)}className="game-box">{value}</div>)}

export default App;

