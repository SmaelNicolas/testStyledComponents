import styled from "styled-components";

const Button = styled.button`
	padding: 5px;
	color: white;
	border: 1px solid white;
	background-color: black;
	border-radius: 5px;
	text-decoration: none;
`;

function ButtonTest() {
	return <Button>Test Button</Button>;
}

export default ButtonTest;
