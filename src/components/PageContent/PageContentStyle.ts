import styled from "styled-components";

export const PageContainer = styled.div`
	width: 100%;

  .return-button {
    color: var(--primary-color);
		cursor: pointer;

		span {
			margin-left: 0.5rem;
			font-weight: 500;
		}
  }

	.page-name {
		margin: 1.125rem 0;
		color: var(--grey-color);
		font-size: 0.75rem;
		font-weight: bold;
	}

	.page-content-bg {
		background: var(--white);
		border-radius: 0.5rem;
		padding: 1.5rem;
	}
`;
