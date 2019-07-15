import React, { useState } from 'react';
import './App.css';
import TeamData from "././TeamData";
import TeamMembers from "./Components/TeamMembers";

function App() {

  const [ teamMember, setTeamMember] = useStae({})

  return (
    <div className="App">
      <TeamMembers />
    </div>
  );
}

export default App;
