import styled from "styled-components";

export const ChargeContainer = styled.div`
  width: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;

  .stepper-container {
    padding: 1rem 4rem 1.5rem 1rem;
  }
`;

export const OutOfScopeMessage = styled.div`
  text-align: center;
	margin: 1.5rem;
  color: var(--light-grey-color);
`;
