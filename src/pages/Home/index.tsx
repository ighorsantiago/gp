import { Container, Component, Text, Logo } from "./styles";

import { Header } from "../../components/Header";

import logo from '../../../assets/fav.svg';
import { Drop } from "../../components/Drop";

export function Home() {
    return (
        <Container>
            <Header />
            <Component>
                <Logo src={logo} />
                
                <Text>O MAIOR SITE DE ACOMPANHANTES DO BRASIL</Text>

                <Drop />
            </Component>
        </Container>
    )
}