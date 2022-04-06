import { useState } from 'react';
import Home from './Home';
import BracketTest from './BracketTest';
import Competior from './Competior';
import Match from "./Match";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <nav className='Nav'>
          <ul className='Nav-list'>
            <Link to="/home" className='Nav-list-item'><li>Home</li></Link>
            <Link to="/brackettest" className='Nav-list-item'><li>BracketTest</li></Link>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={<> <Home /> </>} />
          <Route path='/home' element={<> <Home /> </>} />
          <Route path='/brackettest' element={<> <BracketTest /> </>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
