import styled from "styled-components";

const DivHola = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
	border: 2px dotted black;
	margin: 10px;
`;

const DivHola2 = styled(DivHola)`
	width: 500px;
	background-color: yellow;
`;

const DivConProps = styled(DivHola)`
	width: 300px;
	text-align: center;
	color: ${(props) => props.color || "green"};
	font-size: 30px;
	background-color: ${(props) => props.bgc || "pink"};
`;

function Div() {
	return (
		<>
			<DivConProps bgc='purple'>DIV CON PROPS</DivConProps>
			<DivHola2 />
			<DivHola />;
		</>
	);
}

export default Div;
