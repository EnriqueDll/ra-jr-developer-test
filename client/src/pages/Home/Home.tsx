import React from 'react';
export interface HomeInterface { }

import './styles/Home.css';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ToysIcon from '@mui/icons-material/Toys';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';


const bull = (
	<Box
		component="span"
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

const Home: React.FC<HomeInterface> = () => {
	return (

		<div className="Home">

			<div className='Title-U'>
				Registro de Estacionamiento
			</div>
			
			<div className='space-card'>
				<div className='card'>
					<DirectionsCarIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<h3>Registro Entrada</h3>
					</div>
				</div>

				<div className='card'>
					<ToysIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<h3>Registro Salida</h3>
					</div>
				</div>
			</div>

			<div className='space-card'>
				<Link to = '/management'>
					<div className='cardA'>
						<PlaylistAddCheckIcon sx={{ fontSize: 160 }} />
						<div className='container'>
							<h3>Vehículo Oficial</h3>
						</div>
					</div>
				</Link>
				<div className='card'>
					<HistoryIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<h3>Historial</h3>
					</div>
				</div>
			</div>
			
		</div>

	);
};

export default Home;
