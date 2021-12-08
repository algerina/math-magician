import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import Calcul from './pages/Calcul'; 
import MainPage from './pages/MainPage';
import Nav from './pages/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="MainPage" element={<MainPage />} />
            <Route path="Calcul" element={<Calcul />} />
            <Route path="Quote" element={<Quote />} />
          </Routes>
        </div>
        ,
      </Router>
    );
  }
}

export default App;
