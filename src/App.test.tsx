import React from 'react'
import ReactDOM from 'react-dom'
// this option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import App from './App.tsx'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)
})
