import React from 'react'
import Typography from '@material-ui/core/Typography'
import logo from './react-logo.svg'
import './Boilerplate.scss'

const Boilerplate: React.FC = () => (
	<div className='App'>
		<header className='App-header'>
			<Typography variant='h1'>
				Hello World
			</Typography>
			<img
				className='App-logo'
				src={logo}
				alt='logo'
			/>
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				Learn React
			</a>
		</header>
	</div>
)

export default Boilerplate
