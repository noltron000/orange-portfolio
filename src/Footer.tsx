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
				/><br />
				<label htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					required
				/><br />
				<label htmlFor='message'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
				/><br />
				<button type='submit'>
					Send
				</button>
			</form>
		</section>
		<section id='contact'>
			<section>
				<p>Email</p>
				<address>
					my_handle@email.com
				</address>
			</section>
			<section>
				<p>Social</p>
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
		</section>
	</footer>
)

export default Footer
