import React from 'react';
import './styles/CloseXButton.css';
import CloseIcon from '@mui/icons-material/Close';

export interface CloseXButtonInterface {
	onClick: any,
}

const CloseXButton : React.FC<CloseXButtonInterface> = ({ onClick }) => {

	return (
		<div 
			className = 'closexbutton'
			onClick={onClick}><CloseIcon /></div >
	);
};

export default CloseXButton;
