import React, { useState } from 'react';
import './App.css';
import { TeamData } from "./TeamData";
import ListOfPlayers from "./Components/ListOfPlayers";
import Form from "./Components/Form"
// import TeamMembers from "./Components/TeamMembers";

function App() {
  
  const [members, setMembers] = useState(TeamData)
  

  return (
    <div className="App">
      <ListOfPlayers  members={members}/>
      <Form setMembers={setMembers}/>
    </div>
  );
}

export default App;
