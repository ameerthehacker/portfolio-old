import React, { Fragment } from 'react';
import Avatar from '../components/Intro/Intro';
import './App.scss';

function App() {
  return (
    <Fragment>
      <div className="avatar-container"> 
        <Avatar src="/images/me.jpg"/>        
      </div>
    </Fragment>
  );
}

export default App;
