import React from 'react';
import Competior from './Competior';
import { useState } from 'react'; 

const BracketTest = () => {
    const [ participants, setParticipants ] = useState([]);
    const [ name, setName ]  = useState("");
    const [ wins, setWins ] = useState("");
    const [ losses, setLosses ] = useState("");
  
    const addParticipant = (val, w, l) => {
      if (parseInt(w) === NaN || w === "") {
        w = "0";
      }
      if (parseInt(l) === NaN || l === "") {
        l = "0";
      }
      if (val.length > 17) {
        val = val.slice(0, 17);
      }
      if (val.trim() !== "") { // trims extra whitespace and does not allow empty items to be added to list
        setParticipants([...participants, [val, w, l]]);
          // if (!participants.includes(val)) { // adds val to list if not already in the list
          //     setParticipants([...participants, [val, w, l]]);
              
          // }
      }
      setName(""); // resets entry field value
      setWins("");
      setLosses("");
  }
  
    const resetParticipants = () => {
      setParticipants([]);
    }
  
    const generateSeeds = () => {
      console.log("seeds generated");
  
      participants.sort((a, b) => a.wins > b.wins);
      participants.map((item, i) => 
          <div key={i}> {item.name} {item.wins}-{item.losses}</div>
      );
  
      // let myparticipants = [];
      // myparticipants.push(participants[0]);
      // for (let i = 1; i < participants.length; i++) {
          
      // }
    }
  
    const generateBracket = () => {
      console.log("generate bracket");
    }
  
    return (
      <div className="App">
        
  
        <nav>
          <h1>Bracketing</h1>
          <ul>
            <a href=""><li>Bracketing</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
          </ul>
        </nav>
  
  
          <h3>Add Participants</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={ name } onChange={(e) => setName(e.target.value)} placeholder="Competitor Name" ></input>
            <input type="text" value={ wins } onChange={(e) => setWins(e.target.value)} placeholder='Wins' className='record-input' ></input>
            <input type="text" value={ losses } onChange={(e) => setLosses(e.target.value)} placeholder='Losses' className='record-input' ></input>
            <button type='reset' onClick={() => addParticipant(name, wins, losses)}>Add Participant</button>
            <br /><br />
            <button type='reset' onClick={() => resetParticipants()}>Reset Participants</button>
          </form>        
  
          <h3>Competitors</h3>
  
          <div className='competitors'>
            {participants.map((participant, index) => (
              <Competior key={index} name={participant[0]} wins={participant[1]} losses={participant[2]} />
              ))}
          </div>
  
          <button type="reset" onClick={() => generateSeeds()}>Generate Seeds</button>
  
          <h3>Seeding</h3>
          <div className='seeds'>
            {participants.map((participant, index) => (
              <>
              
                <p key={index + 1} className='seeds-number'>{index + 1}</p>
                <Competior key={index} name={participant[0]} wins={participant[1]} losses={participant[2]} />
                </>
              
              ))}
          </div>
  
          <button type="reset" onClick={() => generateBracket()}>Generate Bracket</button>
  
  
          <h3>Bracket</h3>
      </div>
    )
}

export default BracketTest
