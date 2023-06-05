import Logo from '../assets/suresign-logo.png';

const Footer = () => {
	return (
		<footer
			className="p-10 flex flex-col gap-6"
			style={{ background: '#104474' }}
		>
			<img src={Logo} alt="logo" height={200} width={250} />

			<div className="flex flex-col gap-2 text-white leading-5 text-xl font-light">
				<h4>Contact: beta@suresign.co</h4>
				<h4>Privacy Statement</h4>
			</div>
		</footer>
	);
};

export default Footer;
