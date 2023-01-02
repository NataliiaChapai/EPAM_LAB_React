import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../../services';
import { Button } from '../../common';
import { Logo } from './components/Logo';

import { StyledHeader, StyledFlex, Name, StyledNavLink } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import { LOGOUT } from '../../store/user/actionTypes';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { name, isAuth } = useSelector(selectUser);
	const token = localStorage.getItem('token');

	const handleClick = () => {
		logout();
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/login');
	};

	useEffect(() => {
		if (!token) {
			dispatch({ type: LOGOUT });
		}
	}, [dispatch, token]);

	return (
		<StyledHeader>
			<Logo></Logo>
			{isAuth ? (
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
