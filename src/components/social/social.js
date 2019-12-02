import React from 'react';
import './social.scss';

function Social(props) {
  return (
    <div className="text-center">
      <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~ameerthehacker">
        <i style={{color: "#FB3E44"}} className="fab fa-2x fa-npm"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ameerthehacker">
        <i className="fab fa-2x fa-github"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ameerthehacker/">
        <i style={{color: "#4875B4"}} className="fab fa-2x fa-linkedin"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC8Ng2uGGi9wtvhExHbekE8w/">
        <i style={{color: "#FF3333"}} className="fab fa-2x fa-youtube"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://medium.com/free-code-camp/declarative-xamarin-form-validation-c174d2a74618/">
        <i style={{color: "#00ab6c"}} className="fab fa-2x fa-medium"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://dev.to/ameerthehacker/build-your-own-react-in-90-lines-of-javascript-1je2">
        <i style={{color: "#000"}} className="fab fa-2x fa-dev"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/ameerthehacker">
        <i style={{color: "#3b5998"}} className="fab fa-2x fa-facebook-square"></i>
      </a>
    </div>
  );
}

export default Social;
