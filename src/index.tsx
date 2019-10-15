import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// this @ts-ignore option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import App from './App.tsx';
// @ts-ignore
import * as serviceWorker from './serviceWorker.ts';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster,
// you can change unregister() to register() below.
// Note this comes with some pitfalls. Learn more about
// service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
