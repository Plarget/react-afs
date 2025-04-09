import { useState } from 'react'
import { Button, Input } from '../../shared/ui'
import './auth.scss'
import { authorization } from '../../shared/api'
export default function AuthPage() {
	const [username, setUsername] = useState('')

	const handleLogIn = async () => {
		await authorization(username)
	}
	return (
		<main className='auth'>
			<div className='auth__panel'>
				<img src='/Logo.svg' alt='Oak tree logo' className='auth__logo' />
				<h1 className='auth__title'>Welcome!</h1>
				<p className='auth__description'>
					Welcome to our platform! Please log in to access your account and manage your
					organization's details. If you're new here, contact your administrator to get started.
				</p>
			</div>
			<div className='auth__login'>
				<div>
					<h2>Log in</h2>
				</div>

				<Input placeholder='Username' onChange={e => setUsername(e.target.value)} />
				<Button onClick={handleLogIn}>Log in</Button>
			</div>
		</main>
	)
}
