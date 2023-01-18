import { Box, InputLabel, Stack, Typography } from '@mui/material';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const SignUp = () => (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
			width: '100%',
		}}
	>
		<Box sx={{ flexDirection: 'column', width: '80%' }}>
			<Box>
				<Typography variant='h5' sx={{ textAlign: 'center', color: 'white' }}>
					Signup
				</Typography>
			</Box>
			<Box>
				<Stack spacing={4} direction='column'>
					<Stack>
						<InputLabel sx={{ color: 'white' }}>Email</InputLabel>
						<Input name='email' variant='filled' sx={{ background: 'white' }} />
					</Stack>
					<Stack>
						<InputLabel sx={{ color: 'white' }}>Password</InputLabel>
						<Input name='password' variant='filled' sx={{ background: 'white' }} />
					</Stack>
					<Stack>
						<InputLabel sx={{ color: 'white' }}>Confirm Password</InputLabel>
						<Input name='password' variant='filled' sx={{ background: 'white' }} />
					</Stack>
					<Stack>
						<InputLabel sx={{ color: 'white' }}>Organisation Name</InputLabel>
						<Input name='password' variant='filled' sx={{ background: 'white' }} />
					</Stack>
					<Stack>
						<InputLabel sx={{ color: 'white' }}>Phone Number</InputLabel>
						<Input
							type='number'
							name='password'
							variant='filled'
							sx={{ background: 'white' }}
						/>
					</Stack>
					<Button fullWidth variant='contained'>
						Signup
					</Button>
				</Stack>
			</Box>
		</Box>
	</Box>
);

export default SignUp;
