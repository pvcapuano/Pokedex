import React, {useState} from "react";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import "./App.css"


function App() {

  // My Pokemons
  // eslint-disable-next-line
  const [ pokeball, setPokeball ] = useState(["pikachu", "gengar", "articuno", "mewtwo", "umbreon", "suicune"])
  

  return (

    <>
      <Header />
      <List pokeball={pokeball} />
     
    </> 
  );
}

export default App;
