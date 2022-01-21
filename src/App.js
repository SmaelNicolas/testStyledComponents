import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import ButtonTest from "./components/ButtonTest/ButtonTest";
import Div from "./components/Div/Div";

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;

	background-color: lightblue;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<>
			<Helmet>
				<title>TITLE USANDO HELMET</title>
				<meta name='description' content='CONTENT EN HELMET' />
				<link rel='canonical' href='' />
			</Helmet>
			<AppContainer>
				<Div />
				<ButtonTest />
			</AppContainer>
		</>
	);
}

export default App;
