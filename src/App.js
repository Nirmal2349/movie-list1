import "./App.css";
import React, { useState } from "react";

function App() {

  const movies = [
    {
      name: "Pokemon",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_MAs1sndGC2inGmuL7OOvsDO0Wx6D0UHCg&usqp=CAU",
      rating: "⭐9.0/10",
      description:
        "Ash Ketchum from Pallet Town is 10 years old today. This means he is now old enough to become a Pokémon Trainer. Ash dreams big about the adventures he will experience after receiving his first Pokémonfrom Professor Oak.",
    },
    {
      name:"Demon Slayer",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyQdQ3dKsYGWDMfv6zmSbfgD4f_feVZpttQ&usqp=CAU",
      rating:"⭐8.5/10",
      description:"Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.",
    },
    {
      name:"ONE PUNCH MAN",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdH0d1ar5ryC7al6unN6lO-sP0QLq_tntKA&usqp=CAU",
      rating:"⭐7.5/10",
      description:"It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength",
    },
    {
      name:"Beyblade Burst",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvmmG2SKrVju5kgGSDv-eYD_O8asmj9_pJA&usqp=CAU",
      rating:"⭐8.0/10",
      description:"Valt Aoi, an elementary school student, starts practising Beyblades, spinning tops enchanted with magical spirits of different creatures, to work his way up and become a world class player",
    },
    {
      name:"Naruto Shippuden the Will of Fire",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAxbXvGWpJ5lK0BLK5d2cO1Z3LOHpSwetRQ&usqp=CAU",
      rating:"⭐9.0/10",
      description:"Naruto Shippuden the Movie: The Will of Fire, the sixth Naruto film overall and the third Naruto: Shippuden film, takes as its basis the popular anime and manga series. Released on August 1, 2009 in theaters in Japan, it uses the advertising tagline Todoke, ore-tachi no Omoi!.",
    },
  ];

  


  return (
    <div className="App">
      <div className="movie-list">
        {movies.map((mv) => (
          <Movie
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            description={mv.description}
          />
        ))}
      </div>
    </div>
  );
}


function Movie({name,poster,rating,description}){

    return (
      <div className="movie-container">
        <img
          className="movie-poster"
          src={poster}
          alt={name}
        />
        <div className="movie-details">
          <h2>{name}</h2>
          <p>{rating}</p>
        </div>
        <p>{description}</p>
      </div>
    );
}



export default App;