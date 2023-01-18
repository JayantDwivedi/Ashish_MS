import { Close } from '@mui/icons-material';
import {
	Dialog,
	DialogContent,
	DialogProps,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { ReactNode } from 'react';

export interface IProps extends DialogProps {
	open: boolean;
	children: ReactNode;
	close: () => void;
	showCloseButton?: boolean;
	heading?: string;
}
const Modal = ({
	open,
	close,
	children,
	maxWidth = 'md',
	showCloseButton,
	heading,
}: IProps) => (
	<Dialog
		open={open}
		aria-labelledby='alert-dialog-title'
		aria-describedby='alert-dialog-description'
		maxWidth={maxWidth}
		sx={{ mx: 'auto' }}
	>
		<Grid padding={4}>
			<Grid container justifyContent='space-between'>
				<Typography variant='h5'>{heading}</Typography>
				{showCloseButton && (
					<IconButton
						onClick={() => {
							close();
						}}
					>
						<Close />
					</IconButton>
				)}
			</Grid>

			<DialogContent sx={{ padding: 0, paddingTop: 2 }}>{children}</DialogContent>
		</Grid>
	</Dialog>
);

Modal.defaultProps = {
	showCloseButton: true,
	heading: '',
};

export default Modal;
