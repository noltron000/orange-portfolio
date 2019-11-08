import React from 'react'
import './Tabloid.scss'
// this @ts-ignore option is a personal convention
// ? how to set this up in tsconfig ?
// @ts-ignore
import Story from './Story.tsx'

const Tabloid: React.FC = () => (
	<main id='tabloid'>
		<section id='stories'>
			<Story />
			<Story />
			<Story />
		</section>
	</main>
)

export default Tabloid
