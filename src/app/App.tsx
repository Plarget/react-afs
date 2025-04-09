import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../shared/ui'
import '../shared/ui/sidebar/sidebar.scss'
import { OrganizationPage } from '../pages'
import { companyStore } from '../entities/companies'
import { getAuthToken } from '../shared/api'
import AuthPage from '../pages/auth'

const id = companyStore.company.id
// HOC - Защита роута
function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const token = getAuthToken()

	if (!token) {
		return <Navigate to='/auth' replace />
	}

	return children
}
function AuthRoute({ children }: { children: React.ReactNode }) {
	const token = getAuthToken()

	if (token) {
		return <Navigate to={`/organization/${id}`} replace />
	}

	return children
}

function App() {
	const id = companyStore.company.id

	return (
		<main className='page'>
			<Routes>
				<Route
					path='/auth'
					element={
						<AuthRoute>
							<AuthPage />
						</AuthRoute>
					}
				/>
				<Route
					path='*'
					element={
						<>
							<Sidebar />
							<article className='page__content'>
								<Routes>
									<Route
										path='/'
										element={
											<ProtectedRoute>
												<Navigate to={`/organization/${id}`} replace />
											</ProtectedRoute>
										}
									/>
									<Route
										path={`/organization/${id}`}
										element={
											<ProtectedRoute>
												<OrganizationPage id={id} />
											</ProtectedRoute>
										}
									/>
									{/* <Route path='/contractors' element={<ContractorsPage />} />
								  <Route path='/clients' element={<ClientsPage />} /> */}
								</Routes>
							</article>
						</>
					}
				/>
			</Routes>
		</main>
	)
}

export default App
