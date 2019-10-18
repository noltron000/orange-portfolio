import React from 'react'
// import './App.scss'
// this @ts-ignore option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import Splash from './Splash.tsx'
// @ts-ignore
import Header from './Header.tsx'

const App: React.FC = () => (
	<>
		<Splash />
		<Header />
	</>
)

export default App
