import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './components/Homepage/Homepage';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Homepage />
      
    </div>
  );
}

export default App;
