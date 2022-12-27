import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Button, Input } from '../../common';
import { StyledP } from '../CreateCourse/components/CourseAuthors/CourseAuthors.styled';

import {
	StyledFlexColumn,
	StyledSection,
	StyledCenterItem,
} from './Login.styled';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
			default:
				return;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const reqBody = { email, password };
		console.log(reqBody);
		setEmail('');
		setPassword('');
		navigate('/courses');
	};

	return (
		<StyledSection>
			<StyledCenterItem>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<StyledFlexColumn>
						<Input
							type='email'
							name='email'
							value={email}
							placeholderText='Enter email'
							labelText='Email'
							onChange={handleChange}
						></Input>
						<Input
							type='password'
							name='password'
							value={password}
							placeholderText='Enter password'
							labelText='Password'
							onChange={handleChange}
						></Input>
					</StyledFlexColumn>
					<Button buttonText='Login'></Button>
				</form>

				<StyledP>
					<span>If you not have an account you can </span>
					<Link to='/registration'>Registration</Link>
				</StyledP>
			</StyledCenterItem>
		</StyledSection>
	);
};
