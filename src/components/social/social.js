import React, { Fragment } from 'react';
import './social.scss';

function Social(props) {
  return (
    <div className="text-center">
      <a target="_blank" href="https://github.com/ameerthehacker">
        <i className="fa fa-2x fa-github"></i>
      </a>
      <a target="_blank" href="https://facebook.com/ameerthehacker">
        <i className="fa fa-2x fa-facebook-square"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ameerthehacker/">
        <i className="fa fa-2x fa-linkedin-square"></i>
      </a>
    </div>
  );
}

export default Social;
