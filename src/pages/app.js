import React, { Fragment } from 'react';
import Intro from '../components/intro/intro';
import './app.scss';
import MyImage from '../images/me.jpg';

function App() {
  return (
    <Fragment>
      <div className="avatar-container"> 
        <Intro src={MyImage}/>        
      </div>
    </Fragment>
  );
}

export default App;
