import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";

import { Router } from "./Router";
import { Header } from "./components/Header";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
}
