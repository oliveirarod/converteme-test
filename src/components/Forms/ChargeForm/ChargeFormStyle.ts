import styled from "styled-components";

export const ChargeFormContainer = styled.div`
	.dark-form-text {
		color: var(--black);
		font-size: 0.875rem;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 1.25rem;

		&:not(:first-child) {
			margin-top: 1.125rem;
		}
	}

	.payment-info-text {
		font-size: 0.875rem;
		color: var(--grey-color);
		margin: 1rem 0 1.125rem;
	}
`