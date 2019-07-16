import React, { useState } from 'react';
import './App.css';
import { TeamData } from "./TeamData";
import ListOfPlayers from "./Components/ListOfPlayers";
// import TeamMembers from "./Components/TeamMembers";

function App() {
  
  const [members, SetMembers] = useState(TeamData)
  

  return (
    <div className="App">
      <ListOfPlayers  members={members}/>
      
    </div>
  );
}

export default App;
