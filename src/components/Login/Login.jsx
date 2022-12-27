import { Link } from 'react-router-dom';
import { Button, Input } from '../../common';
import { StyledP } from '../CreateCourse/components/CourseAuthors/CourseAuthors.styled';

import { StyledFlexColumn, StyledSection } from './Login.styled';
import { StyledCenterItem } from './Login.styled';

export const Login = () => (
	<StyledSection>
		<StyledCenterItem>
			<h2>Login</h2>
			<StyledFlexColumn>
				<Input placeholderText='Enter email' labelText='Email'></Input>
				<Input placeholderText='Enter password' labelText='Password'></Input>
			</StyledFlexColumn>
			<div>
				<Button buttonText='Login'></Button>
			</div>

			<StyledP>
				<span>If you not have an account you can </span>
				<Link to='/registration'>Registration</Link>
			</StyledP>
		</StyledCenterItem>
	</StyledSection>
);
