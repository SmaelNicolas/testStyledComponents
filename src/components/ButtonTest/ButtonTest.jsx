import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
	padding: 15px;
	color: white;
	border: 1px solid white;
	background-color: black;
	border-radius: 5px;
	text-decoration: none;
	transition: all 0.5s ease-in;

	&:hover {
		cursor: pointer;
		width: 150px;
		background-color: lime;
		color: black;
		transition: all 0.5s ease-in;
	}
`;

const Counter = styled.span`
	border: 2px solid green;
	font-style: italic;
	padding: 40px;
	font-size: ${(props) => props.size || "50px"};
	color: ${(props) => props.color || "white"};
`;

function ButtonTest() {
	const [numero, setNumero] = useState(0);

	useEffect(() => {}, [numero]);
	const sumar = () => {
		setNumero(numero + 1);
		console.log(numero);
	};

	return (
		<>
			<Button onClick={sumar}>Test Button</Button>;
			<Counter color='red' size='30'>
				{numero}
			</Counter>
			<Counter>{numero}</Counter>
		</>
	);
}

export default ButtonTest;
