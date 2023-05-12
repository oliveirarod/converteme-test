import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
	border: 1px solid var(--grey-color);
	border-radius: 0.5rem;

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 665px) {
    width: 100%;
  }

  div {
    background: var(--white);
    color: var(--primary-color);
		border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
    width: 100%;
		transition: var(--default-transition);
    text-align: center;
    cursor: pointer;

    &.active {
      background: var(--primary-color);
      color: var(--white);
			border-color: var(--primary-color);
      border-radius: 0.5rem;
    }
  }
`;
