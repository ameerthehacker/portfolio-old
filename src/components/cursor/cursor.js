import React, { Fragment } from 'react';
import './cursor.scss';

function Cursor() {
  return (
    <Fragment>
      <span className="hash"> # </span>
      <div className="cursor"></div>
    </Fragment>
  );
}

export default Cursor;
