import styled from "styled-components";

export const SidebarContainer = styled.div`
	position: fixed;
	left: 0;
	top: var(--navbar-height);
	background: var(--white);
	width: var(--sidebar-width);
	height: calc(100vh - var(--navbar-height));
	z-index: 100;

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