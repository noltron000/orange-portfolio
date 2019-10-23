import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.scss'
// this @ts-ignore option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import App from './App.tsx'
// @ts-ignore
import * as serviceWorker from './serviceWorker.ts'

// create google analytics tracker
ReactGA.initialize('UA-150733024-1')
ReactGA.pageview(window.location.pathname + window.location.search)

// insert app into root
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster,
// you can change unregister() to register() below.
// Note this comes with some pitfalls. Learn more about
// service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
