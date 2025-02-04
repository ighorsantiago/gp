import {
	Container,
	ItemIcon,
	Menu,
	MenuItem,
	MenuLink,
	Text,
} from "./styles.ts";

import heart from "../../assets/heart.svg";
import login from "../../assets/login.svg";
import mail from "../../assets/contact.svg";

export function Header() {
	return (
		<Container>
			<Text>GAROTAS DE PROGRAMA</Text>

			<Menu>
				<MenuLink to="">
					<MenuItem>
						<ItemIcon src={heart} />
						<Text>Anuncie</Text>
					</MenuItem>
				</MenuLink>
				<MenuLink to="">
					<MenuItem>
						<ItemIcon src={login} />
						<Text>Login</Text>
					</MenuItem>
				</MenuLink>
				<MenuLink to="">
					<MenuItem>
						<ItemIcon src={mail} />
						<Text>Contato</Text>
					</MenuItem>
				</MenuLink>
			</Menu>
		</Container>
	);
}
