import { Container, Filter, FiltersBox, Title, FilterText, FilterTitle, CardBox } from "./styles";

import { Card } from "../../components/Card";

import { filters } from "../../utils/filters";

export function SP() {

	// const women = [1, 2];
	// const women = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<Container>
				<Title>AS MELHORES ACOMPANHANTE DE SÃO PAULO</Title>

				<FiltersBox>
					<FilterTitle>Selecione um filtro: </FilterTitle>
					{
						filters.map(filter => (
							<Filter key={filter.id}>
								<FilterText>{filter.name}</FilterText>
							</Filter>
						))
					}
				</FiltersBox>

				<CardBox>
					{/* {
						women.map(woman => (
							<Card key={woman}>
							</Card>
						))
					} */}
					<Card />
					<Card />
					<Card />
				</CardBox>
		</Container>
	);
}
