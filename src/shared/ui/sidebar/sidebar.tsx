import { companyStore } from '../../../entities/companies'
import { logout } from '../../api'
import {
	AccountIcon,
	CompanyIcon,
	ContractorIcon,
	SearchIcon,
	SettingIcon,
	SignOutIcon
} from '../../icons'
import { Button } from '../button'

export function Sidebar() {
	const id = companyStore.company?.id
	return (
		<aside className='sidebar'>
			<section className='sidebar__section-one'>
				<header className='sidebar__section-one-header'>
					<img
						src='/Logo.svg'
						alt='Oak tree logo'
						className='sidebar__section-one-logo'
					/>
				</header>
				<nav className='sidebar__section-one-nav'>
					<ul className='sidebar__section-one-list'>
						<li>
							<Button renderIcon={<CompanyIcon />} variant='menu' className='is--selected' />
						</li>
						<li>
							<Button renderIcon={<SearchIcon />} variant='menu' />
						</li>
					</ul>
				</nav>
				<footer className='sidebar__section-one-footer'>
					<nav className='sidebar__section-one-footer-nav'>
						<ul className='sidebar__section-one-list'>
							<li>
								<hr />
							</li>
							<li>
								<Button renderIcon={<SettingIcon />} variant='menu' />
							</li>
							<li>
								<Button renderIcon={<SignOutIcon />} variant='menu' onClick={() => logout()} />
							</li>
						</ul>
					</nav>
				</footer>
			</section>

			<section className='sidebar__section-two'>
				<header className='sidebar__section-two-header'>
					<h5>Oak Tree Cemetery</h5>
					<span>Process Manager</span>
				</header>
				<hr className='separator' />
				<nav className='sidebar__section-two-nav'>
					<Button renderIcon={<CompanyIcon />} href={`/organization/${id}`}>
						Organizations
					</Button>
					<Button variant='outline' renderIcon={<ContractorIcon />}>
						Contractors
					</Button>
					<Button variant='outline' renderIcon={<AccountIcon />}>
						Clients
					</Button>
				</nav>
				<footer className='sidebar__section-two-footer'>All Funeral Services © 2015-2025</footer>
			</section>
		</aside>
	)
}
