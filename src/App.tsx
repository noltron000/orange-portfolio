import React from 'react'
import ReactGA from 'react-ga'
import './App.scss'
// this @ts-ignore option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import Splash from './Splash.tsx'
// @ts-ignore
import Header from './Header.tsx'
// @ts-ignore
import Navbar from './Navbar.tsx'
// @ts-ignore
import Tabloid from './Tabloid.tsx'
// @ts-ignore
import Footer from './Footer.tsx'

// create google analytics tracker
ReactGA.initialize('UA-150733024-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const App: React.FC = () => (
	<>
		<div id='content'>
			<Splash />
			<Header />
			<Navbar />
			<Tabloid />
			<Footer />
		</div>
		<div id='background' />
	</>
)

export default App
