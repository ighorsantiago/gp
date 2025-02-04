import { Container, Image, Infos, Name, Address } from "./styles";

import image from '../../assets/woman_image.jpg';

export function Card() {

    return (
        <Container>
            <Image src={image} />
            <Infos>
                <Name>Fulana</Name>
                <Address>Lapa, São Paulo - SP, Brasil</Address>
            </Infos>
        </Container>
    )
}