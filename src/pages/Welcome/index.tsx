import { Container, Component, Text, BtnBox, Btn, BtnText } from "./styles";

export function Welcome() {

	return (
		<Container>
			<Component>
				<Text>O MAIOR SITE DE ACOMPANHANTES DO BRASIL</Text>

				<BtnBox>
					{/* <Btn title="Tenho mais de 18" />
                    <Btn title="Tenho menos de 18" /> */}
					<Btn
                        to="/home"
                    >
						<BtnText>Tenho mais de 18</BtnText>
					</Btn>
					<Btn
                        to="https://www.disneyplus.com/pt-br?cid=DSS-Search-Google-71700000101864766-&s_kwcid=AL!8468!3!714211586366!e!!g!!disney%20channel&gad_source=1&gclid=CjwKCAiA74G9BhAEEiwA8kNfpahj09c2NZVqVVff7PvkmIu4FzykX7IR121SRYeeJYgBcID5Mq1AAhoCiUMQAvD_BwE&gclsrc=aw.ds"
                    >
						<BtnText>Tenho menos de 18</BtnText>
					</Btn>
				</BtnBox>
			</Component>
		</Container>
	);
}
