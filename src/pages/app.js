import React, { Fragment } from 'react';
import Intro from '../components/intro/intro';
import './app.scss';

function App() {
  return (
    <Fragment>
      <div className="avatar-container"> 
        <Intro src="/images/me.jpg"/>        
      </div>
    </Fragment>
  );
}

export default App;
