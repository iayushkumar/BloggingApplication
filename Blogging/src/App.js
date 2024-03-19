import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import NoteState from './context/notes/NoteState';

import Signup from './component/Signup';
import Login from './component/Login';
import Personal from './component/Personal';
import Post from './component/Post';


function App() {
  return (
    <NoteState>
    <Router>
      <Navbar />
     
      <div className='containerab'>
      <Routes>
        <Route  exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />

        <Route exact path="/post" element={<Post />} />
        <Route exact path="/personal" element={<Personal />} />

      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;

