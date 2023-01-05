import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Button } from '../../common';
import { Logo } from './components/Logo';
import { selectUser } from '../../store/user/selectors';
import { currentUserThunk, logoutThunk } from '../../store/user/thunk';

import { StyledHeader, StyledFlex, Name, StyledNavLink } from './Header.styled';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { name, isAuth } = useSelector(selectUser);

	const handleClick = () => {
		localStorage.removeItem('token');
		dispatch(logoutThunk());
		navigate('/login');
	};

	useEffect(() => {
		dispatch(currentUserThunk());
	}, [dispatch]);

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
