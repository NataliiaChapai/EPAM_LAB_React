import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../../services';
import { Button } from '../../common';
import { Logo } from './components/Logo';

import { StyledHeader, StyledFlex, Name, StyledNavLink } from './Header.styled';

export const Header = () => {
	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user'));
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			setIsLoggedIn(true);
			setName(user.name);
		}
	}, [token, user]);

	const handleClick = () => {
		logout();
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setIsLoggedIn(false);
		navigate('/login');
	};

	return (
		<StyledHeader>
			<Logo></Logo>
			{isLoggedIn ? (
				<StyledFlex>
					<Name>{name}</Name>
					<Button buttonText='Logout' onClick={handleClick}></Button>
				</StyledFlex>
			) : (
				<StyledFlex>
					<StyledNavLink
						to='/login'
						style={({ isActive }) =>
							isActive ? { color: 'red' } : { color: 'blue' }
						}
					>
						Login
					</StyledNavLink>
					<StyledNavLink
						to='/registration'
						style={({ isActive }) =>
							isActive ? { color: 'red' } : { color: 'blue' }
						}
					>
						Registration
					</StyledNavLink>
				</StyledFlex>
			)}
		</StyledHeader>
	);
};
