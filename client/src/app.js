import React from 'react';
import ReactDOM from 'react-dom';
import TopSongsContainer from './containers/TopSongsContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <TopSongsContainer />,
    document.getElementById('app')
  );
};
