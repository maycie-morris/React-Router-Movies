import React from 'react';
import { Link } from 'react-router-dom'


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <Link to="/">
      <div className='home-button'>Home</div>
    </Link>
  </div>
);

export default SavedList;
