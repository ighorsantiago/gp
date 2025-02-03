import { Container, Component, Text, BtnBox, Btn, BtnText } from "./styles";

export function Home() {

	return (
		<Container>
			{/* <Header /> */}
			<Component>
				{/* <Logo src={logo} /> */}

				<Text>O MAIOR SITE DE ACOMPANHANTES DO BRASIL</Text>

				<BtnBox>
					{/* <Btn title="Tenho mais de 18" />
                                <Btn title="Tenho menos de 18" /> */}
					<Btn to="/rj">
						<BtnText>Rio de Janeiro</BtnText>
					</Btn>
					<Btn to="/sp">
						<BtnText>São Paulo</BtnText>
					</Btn>
				</BtnBox>
			</Component>
		</Container>
	);
}
