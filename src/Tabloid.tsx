import React from 'react'
import './Tabloid.scss'

const Tabloid: React.FC = () => (
	<main id='tabloid'>
		<section id='stories'>
			<article className='featured post'>Featured Post</article>
			<article className='post'>Post</article>
			<article className='post'>Post</article>
			<article className='post'>Post</article>
		</section>
	</main>
)

export default Tabloid
