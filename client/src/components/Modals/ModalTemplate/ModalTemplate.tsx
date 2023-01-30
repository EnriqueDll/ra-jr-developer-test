import React from 'react';
import './styles/ModalTemplate.css';


export interface ModalTemplateInterface { 
	className: any,
	children: any,
	onClick: any,
}

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CloseXButton } from '@/components/CloseXButton';



const ModalTemplate: React.FC<ModalTemplateInterface> = ({className, children, onClick}) => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	return (
		<div className={`modalTemplate`} >
			<Button variant="outlined" onClick={handleClickOpen}>
				Open form dialog
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<CloseXButton onClick={handleClose} />
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here. We
						will send updates occasionally.
					</DialogContentText>
					{/* <TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="text"
						fullWidth
						variant="standard"
					/> */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>




	);


};

export default ModalTemplate;
