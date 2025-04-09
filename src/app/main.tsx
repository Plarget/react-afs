import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'

import { AppProviders } from './providers/AppProviders.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProviders>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProviders>
	</StrictMode>
)
