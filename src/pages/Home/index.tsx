import { Container, Component, Text, Logo, BtnBox, Btn, BtnText } from "./styles";

import { Header } from "../../components/Header";

import logo from "../../../assets/fav.svg";
import { Drop } from "../../components/Drop";
import { useState } from "react";
import { Popup } from "../../components/Popup";

export function Home() {
	const [visible, setVisible] = useState(false);

	function handlePopup() {
		setVisible(true);
	}

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
