import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
export interface NavbarInterface { }

import logoImg from '@/assets/images/parking-white.png';
import './styles/Navbar.css';

const pages = ["home", "management"]

const Navbar: React.FC<NavbarInterface> = () => {

	return (
		<AppBar position="fixed">
			<Toolbar>
				<img className='Header__logo__img' src={logoImg} />
				{pages.map((page) => (
					<Button
						key={page}
						sx={{ my: 2, color: 'white', display: 'block' }}>
						<Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}> {page}</Link>
					</Button>
				))}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
