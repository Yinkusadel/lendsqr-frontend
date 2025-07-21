import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';
import SwitchModal from './SwitchModal';

interface Props {
	setIsMenuOpen: (value: boolean) => void;
	isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
	const pathname: String = useLocation().pathname;
	const navigate = useNavigate();

	const [showSwitchModal, setShowSwitchModal] = useState(false);

	const toggleSwitchModal = () => {
		setShowSwitchModal(prev => !prev);
	};

	const isRouteActive = (route: String) => {
		if (pathname === '/dashboard' && route === '/dashboard') {
			return true;
		}
		const path = route.split('/')[2];
		return Boolean(pathname.includes(path));
	};

	return (
		<div className={`side-nav ${isMenuOpen && 'nav-active'}`}>
			<div className="side-nav-header">
				<img src="/images/logo.svg" alt="logo" className="logo" />
			</div>
			<div className="">
				<ul className="side-nav-menu">
					{navItems.map((item, index) => {
						return (
							<div key={item.id}>
								{!item.header ? (
									item.title === 'Switch Organization' ? (
								  <div className="switch-org-wrapper" key={item.id}>
    <li
      className={`side-nav-menu-item ${showSwitchModal ? 'active' : ''}`}
      onClick={toggleSwitchModal}
    >
      <img src={item.icon} alt={item.title} />
      <span>{item.title}</span>
      <img src="/images/icons/down-arrow.svg" alt="dropdown arrow" />
    </li>

    {showSwitchModal && <SwitchModal />}
  </div>
									) : (
										<Link to={`${item.link}`}>
											<li className={`side-nav-menu-item ${isRouteActive(item.link) && 'active'}`}>
												<img src={item.icon} alt={item.title} />
												<span>{item.title}</span>
											</li>
										</Link>
									)
								) : (
									<li className="nav-item-header">
										<span>{item.title}</span>
									</li>
								)}

							</div>
						);
					})}
				</ul>
				{showSwitchModal && <SwitchModal />}


				<div className="logout" onClick={() => navigate('/')}>
					<div>
						<img src="/images/icons/logout-icon.svg" alt="logout icon" />
						<span>Logout</span>
					</div>

					<span className="version">v1.2.0</span>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
