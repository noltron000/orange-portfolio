import React from 'react'
import './Footer.scss'

const Footer: React.FC = () => (
	<footer id='footer'>
		<section id='get-in-touch'>
			<form>
				<label htmlFor='name'>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					required
				/>
				<label htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					required
				/>
				<label htmlFor='message'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
				/>
				<button
					className='button'
					type='submit'
				>
					Send Message
				</button>
			</form>
		</section>
		<section className='contact'>
			<p className='label'>
				Location
			</p>
			<address>
				San Francisco, California
			</address>
		</section>
		<section className='contact'>
			<p className='label'>
				Email
			</p>
			<address>
				my_handle@email.com
			</address>
		</section>
		<section className='contact'>
			<p className='label'>
				Social
			</p>
			<address>
				<ul>
					<li>Twitter</li>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>GitHub</li>
					<li>LinkedIn</li>
				</ul>
			</address>
		</section>
	</footer>
)

export default Footer
