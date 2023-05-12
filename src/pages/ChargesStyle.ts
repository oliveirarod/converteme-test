import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (max-width: 996px) {
    padding: 3rem 2.5rem;
  }

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
      min-width: 260px;

      @media (max-width: 1230px) {
        right: calc(1% + 0.5rem);
      }

      @media (max-width: 795px) {
        top: -10rem;
      }
    }
  }
`;

export const OutOfScopeMessage = styled.div`
  text-align: center;
  margin: 1.5rem;
  color: var(--light-grey-color);
`;
