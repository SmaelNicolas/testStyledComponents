import styled, { keyframes } from "styled-components";

const spin = keyframes`
	0%{opacity:0.5}
	25%{opacity:0.7}
	50%{opacity:0.9}
	75%{opacity:1}
	100%{transform:rotate(360deg)};
`;

const spinBack = keyframes`
	100%{transform:rotate(-360deg)};
`;

const moveLnR = keyframes`
0%{align-self:center;};
50%{
	align-self:end;
}
100%{align-self:start}`;

const DivHola = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
	border: 2px dotted black;
	margin: 10px;
`;

const DivHolaRed = styled(DivHola)`
	animation: ${spin} 3s linear infinite;
	animation-fill-mode: both;

	&:hover {
		animation: ${spinBack} 3s linear infinite;
		animation-fill-mode: both;
	}
`;

const DivHola2 = styled(DivHola)`
	width: 500px;
	background-color: yellow;
	transition: all 1s ease-in-out;

	&:hover {
		transform: rotate(45deg);
		transition: all 1s ease-in-out;
	}
`;

const DivConProps = styled(DivHola)`
	width: 300px;
	text-align: center;
	color: ${({ color }) => color || "green"};
	font-size: 30px;
	background-color: ${({ bgc }) => bgc || "pink"};
	animation: ${moveLnR} 1s linear infinite;

	&:hover {
		animation: none;
	}
`;

function Div() {
	return (
		<>
			<DivConProps bgc='purple'>DIV CON PROPS!</DivConProps>
			<DivHola2 />
			<DivHolaRed />;
		</>
	);
}

export default Div;
