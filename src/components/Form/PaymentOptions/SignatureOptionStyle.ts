import styled from "styled-components";

export const Container = styled.div`
  display: grid;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	gap: 1rem;
	width: 50%;

	@media (max-width: 1115px) {
		width: 75%;
	}

	@media (max-width: 775px) {
    width: 100%;
  }

	@media (max-width: 630px) {
		grid-template-columns: 1fr;
	}
`;
