import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .stepper-container {
    padding: 1rem 4rem 0.5rem 1rem;
  }

  .form-container {
    position: relative;

    .aditional-options {
      position: absolute;
      top: 0;
      right: 0;
      width: 35%;
    }
  }
`;

export const OutOfScopeMessage = styled.div`
  text-align: center;
	margin: 1.5rem;
  color: var(--light-grey-color);
`;
