import React, { useState } from 'react';
import './App.css';

function App() {

  const [ teamMember, setTeamMember] = useStae({})

  return (
    <div className="App">
      <TeamMembers />
    </div>
  );
}

export default App;
