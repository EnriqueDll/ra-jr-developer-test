import React from 'react';
import './styles/Management.css'
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import HistoryIcon from '@mui/icons-material/History';

export interface ManagementInterface { }

import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalTemplate } from '@/components';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '15px',
	borderRadius: '20px',
	p: 4,
	color: 'black'
};

const Management: React.FC<ManagementInterface> = () => {


	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	return (

		<div className='Management'>

			<div className='ArrowStyle'>
				<Link to='/home'>
					<ArrowBackIosNewSharpIcon sx={{ fontSize: 50, color: 'white' }} />
				</Link>
			</div>

			<div className='Title'>
				<h2>
					Administración de Vehículos Oficiales
				</h2>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{/* <Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography> */}
					<div onClick={handleClose}>
						x
					</div>
					<h3>
						Agregar Vehiculo Oficial
					</h3>

					<label>
						Ingresar placa del vehiculo
						<input></input>
					</label>

					<button onClick={handleClose}>Aceptar</button>
					{/* Podemos probar el de abajo mi loco */}
					{/* <Dialog open={open} onClose={handleClose}>
						<DialogTitle>Subscribe</DialogTitle>
						<DialogContent>
							<DialogContentText>
								To subscribe to this website, please enter your email address here. We
								will send updates occasionally.
							</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="standard"
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={handleClose}>Subscribe</Button>
						</DialogActions>
					</Dialog> */}

				</Box>
			</Modal>

			<div className='space-card'>
				<div className='M-card' onClick={handleOpen}>
					<LibraryAddIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<h3>Agregar Vehículo</h3>
					</div>
				</div>

				<div className='M-card'>
					<BorderColorIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<h3>Editar Vehículo</h3>
					</div>
				</div>

				<div className='M-card'>
					
					<DeleteIcon sx={{ fontSize: 160 }} />
					<div className='container'>
						<ModalTemplate className={undefined} children={undefined} onClick={handleOpen} />
						<h3>Borrar Vehículo</h3>
					</div>
				</div>
			</div>

		</div>

	);
};

export default Management;
