import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Movies />,
    document.body.appendChild(document.createElement('div')),
  );
});