import logo from './logo.png';
import styled from 'styled-components';

const Img = styled.img`
	width: 150px;
`;

function Logo() {
	return <Img src={logo} alt='logo'></Img>;
}
export default Logo;
