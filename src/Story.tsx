import React from 'react'
import './Story.scss'

const Story: React.FC = () => (
	<article className='story'>
		<time
			className='date-published'
			dateTime='10-21-2019'
		>
			October 21, 2019
		</time>
		<a href='#nothing'>
			<h1>Story Header</h1>
		</a>
		<a href='#nothing'>
			<picture>
				<source
					srcSet='https://placekitten.com/1024/512'
					media='(min-width: 800px)'
				/>
				<img
					src='https://placekitten.com/512/320'
					alt='placeholder kitten'
				/>
			</picture>
		</a>
		<p>
			Aenean ornare velit lacus varius enim ullamcorper proin,
			aliquam facilisis ante sed etiam magna interdum congue.
			Lorem ipsum dolor amet nullam sed etiam veroeros.
			Joilinaski asdif disinti vololox.
		</p>
		<a href='#nothing'>
			Full Story
		</a>
	</article>
)

export default Story
