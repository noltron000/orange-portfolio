import React from 'react'
import './Story.scss'

const Story: React.FC = () => (
	<article className='post'>
		<time dateTime='10-21-2019'>October 21st, 2019</time>
		<a href='#nothing'>
			<h2>
				Story Header
			</h2>
			<picture>
				<source
					srcSet='https://placekitten.com/1200/600'
					media='(min-width: 800px)'
				/>
				<img
					src='https://placekitten.com/400/600'
					alt='placeholder kitten'
				/>
			</picture>
		</a>
		<p>Lorem Ipsum Fodarum. Joilinaski asdif disinti vololox.</p>
		<a href='#nothing'>
			Full Story
		</a>
	</article>
)

export default Story
