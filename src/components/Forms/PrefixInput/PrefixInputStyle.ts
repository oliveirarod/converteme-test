import styled from "styled-components";

export const InputContainer = styled.div`
  .input-label {
    color: var(--grey-color);
    font-size: 0.75rem;
  }

  .input-with-prefix {
    display: flex;
    align-items: center;

    .input-prefix {
      background: var(--grey-color);
      border-radius: 0.5rem 0 0 0.5rem;
      height: 2.125rem;
      width: 2.125rem;
      color: var(--white);
      font-weight: bold;
      transition: var(--default-transition);

      &.highlight-input-prefix {
        background: var(--primary-color);
      }
    }

    .input-field {
      height: 1.875rem;
      border-radius: 0 0.5rem 0.5rem 0;
			border: 1px solid var(--grey-color);
			border-left: none;
			padding-left: 0.5rem;
			color: var(--grey-color);
      transition: var(--default-transition);

      &:focus {
        outline: none;
        border-color: var(--primary-color);
      }
    }
  }
`;
