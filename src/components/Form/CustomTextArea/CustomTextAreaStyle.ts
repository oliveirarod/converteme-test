import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 1.25rem;

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 665px) {
    width: 100%;
  }

  label {
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--grey-color);

    .light-text {
      font-weight: 400;
    }
  }

  .textarea-field {
    color: var(--grey-color);
    border-color: var(--light-grey-color);
    border-radius: 0.5rem;
    padding: 0.675rem;
		

    &::placeholder {
      color: var(--light-grey-color);
    }

    &:focus {
      outline: none;
    }
  }
`;
