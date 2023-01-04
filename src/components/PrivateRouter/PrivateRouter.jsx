import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectUser } from '../../store/user/selectors';

export const PrivateRoute = ({ children, redirectTo }) => {
	const { role } = useSelector(selectUser);
	return role === 'ADMIN' ? children : <Navigate replace to={redirectTo} />;
};

PrivateRoute.propTypes = {
	redirectTo: PropTypes.string,
};
