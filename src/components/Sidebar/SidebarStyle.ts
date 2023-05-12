import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: var(--navbar-height);
  background: var(--white);
  height: calc(100vh - var(--navbar-height));
  z-index: 100;

  &.open {
    width: var(--sidebar-width);
  }

  @media (max-width: 1275px) {
    width: 4rem;

		&:not(.open) .menu.active {
			margin-right: 0.25rem;
		}
  }

  .menu {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    color: var(--grey-color);
    height: 1.5rem;
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
