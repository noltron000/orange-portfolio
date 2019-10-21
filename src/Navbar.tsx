import React from 'react'
import './Navbar.scss'

const Navbar: React.FC = () => (
	<nav id='navbar'>
		<ul className='links'>
			<li>
				<a href='#nothing'>topic 1</a>
			</li>
			<li>
				<a href='#nothing'>topic 2</a>
			</li>
			<li>
				<a href='#nothing'>topic 3</a>
			</li>
		</ul>
		<ul className='icons'>
			<li>
				<a href='#nothing'>social media</a>
			</li>
		</ul>
	</nav>
)

export default Navbar
