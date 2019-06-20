import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/app/app';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, 
                document.getElementById('root'));

