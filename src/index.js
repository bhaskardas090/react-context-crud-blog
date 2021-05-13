import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BlogContextProvider from './Context/BlogContext';

ReactDOM.render(
  <BlogContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BlogContextProvider>,
  document.getElementById('root')
);
