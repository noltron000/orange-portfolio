import React from 'react'
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
