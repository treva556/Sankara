


// body 
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from '../components/Navbar';

function Body() {
    return (
        <Router> {/* Wrap the entire content within Router */}
        <div>
          <Navbar />
          <div className="p-8">
            {/* Your main content goes here */}
            <h1 className="text-3xl font-bold underline">Main Content</h1>
          </div>
        </div>
      </Router>
    );
  }
  
  export default Body;

