import { Box, Stack, Typography } from '@mui/material';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { appUrls } from 'constants/urls';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import loginValidator from 'validators/loginValidator';

const Login = () => {
	const navigate = useNavigate();
	const { handleChange, handleBlur, values, handleSubmit, touched, errors } =
		useFormik({
			enableReinitialize: true,
			initialValues: {
				email: '',
				password: '',
			},

			validationSchema: loginValidator,
			onSubmit: () => {
				navigate(appUrls.dashboard);
			},
		});

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				width: '100%',
				background: 'light-grey',
			}}
		>
			<form
				style={{ flexDirection: 'column', width: '80%' }}
				onSubmit={handleSubmit}
			>
				<Box marginY={4}>
					<Typography variant='h5'>Welcome to Admin Dashboard</Typography>
					<Typography variant='caption'>
						Please sign-in to your account and start
					</Typography>
				</Box>
				<Box>
					<Stack spacing={4} direction='column'>
						<Stack>
							<Input
								name='email'
								label='Email'
								type='text'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email || ''}
								error={touched.email && Boolean(errors.email)}
								helperText={errors.email}
							/>
						</Stack>
						<Stack>
							<Input
								label='Password'
								name='password'
								type='password'
								variant='outlined'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								error={touched.password && Boolean(errors.password)}
								helperText={errors.password}
							/>
						</Stack>
						<Button size='large' fullWidth variant='contained' type='submit'>
							Login
						</Button>
					</Stack>
				</Box>
			</form>
		</Box>
	);
};

export default Login;
