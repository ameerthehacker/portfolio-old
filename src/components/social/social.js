import React, { Fragment } from 'react';
import './social.scss';

function Social(props) {
  return (
    <div className="text-center">
      <a target="_blank" href="https://github.com/ameerthehacker">
        <i className="fa fa-2x fa-github"></i>
      </a>
      <a target="_blank" href="https://facebook.com/ameerthehacker">
        <i style={{color: "#3b5998"}} className="fa fa-2x fa-facebook-square"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ameerthehacker/">
        <i style={{color: "#4875B4"}} className="fa fa-2x fa-linkedin-square"></i>
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UC8Ng2uGGi9wtvhExHbekE8w/">
        <i style={{color: "#FF3333"}} className="fa fa-2x fa-youtube-play"></i>
      </a>
      <a target="_blank" href="https://medium.com/free-code-camp/declarative-xamarin-form-validation-c174d2a74618/">
        <i style={{color: "#00ab6c"}} className="fa fa-2x fa-medium"></i>
      </a>
      <a target="_blank" href="https://www.quora.com/profile/Ameer-Jhan-1/">
        <i style={{color: "#AA2200"}} className="fa fa-2x fa-quora"></i>
      </a>
    </div>
  );
}

export default Social;
