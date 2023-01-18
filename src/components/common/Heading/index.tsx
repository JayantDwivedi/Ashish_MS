import { ArrowBack } from '@mui/icons-material';
import { Box, IconButton, Skeleton, Stack, Typography } from '@mui/material';

interface IHeading {
	heading: string;
	subHeading?: string;
	onBack?: () => void;
	showIcon?: boolean;
}
const Heading = ({
	heading,
	subHeading,
	onBack,
	showIcon = false,
}: IHeading) => (
	<Stack spacing={2}>
		<Stack direction='row' sx={{ alignItems: 'center' }}>
			{showIcon && (
				<IconButton onClick={onBack}>
					<ArrowBack color='primary' fontSize='large' />
				</IconButton>
			)}
			{heading ? (
				<Typography variant='h1' fontWeight='600' fontSize='30px'>
					{heading}
				</Typography>
			) : (
				<Skeleton variant='rounded' width={210} height={40} />
			)}
		</Stack>
		{subHeading && (
			<Box width={{ lg: '50%', sm: '100%' }}>
				<Typography variant='subtitle1' fontSize='16px'>
					{subHeading}
				</Typography>
			</Box>
		)}
	</Stack>
);
Heading.defaultProps = {
	subHeading: '',
	onBack: () => {},
	showIcon: false,
};
export default Heading;
