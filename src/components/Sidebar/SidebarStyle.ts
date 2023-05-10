import styled from "styled-components";

export const SidebarContainer = styled.div`
	background: var(--white);
	width: 300px;

	.menu {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		margin: 0.5rem 0;
		color: var(--grey-color);
		cursor: pointer;

		&.active {
			background: var(--primary-color);
			margin-right: 1rem;
			border-radius: 0 3.5rem 3.5rem 0;
			color: var(--white);

			.menu-icon {
				filter: brightness(10);
			}
		}

		.name {
			margin-left: 0.5rem;
			font-size: 0.875rem;
			font-weight: bold;
		}

		.sub-items {
			font-size: 0.875rem;
			margin-left: 0.5rem;
		}
	}
`;