
// Navbar component
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Sankara Hotels!</h1>
        <div className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          {/* Other <Link> components */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;