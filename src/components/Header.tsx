import { useLocation } from 'react-router-dom';
import Logo from '../assets/suresign-logo.png';

const Header = () => {
	const { pathname } = useLocation();
	const isHomePage = pathname === '/';

	return (
		<div className="relative flex justify-end w-[100%]">
			<div
				style={{ background: '#104474' }}
				className={`absolute w-[100%] h-[200px] ${
					isHomePage ? 'opacity-50' : ''
				}`}
			></div>

			<img
				className="absolute top-[60px] right-[40px]"
				src={Logo}
				alt="logo"
				height={200}
				width={250}
			/>
		</div>
	);
};

export default Header;
