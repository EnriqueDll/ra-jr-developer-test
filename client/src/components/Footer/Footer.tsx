import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import './styles/Footer.css';
export interface FooterInterface {}

const Footer : React.FC<FooterInterface> = () => {
	return (
		<footer className='Footer'>
			<div>
				2023 &copy; Parking
			</div>
			<div>
				Parking Management System
			</div>
			<div>
				<a className='color-icon' href = "https://github.com/EnriqueDll/ra-jr-developer-test.git" target = "_blank">
					<GitHubIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
