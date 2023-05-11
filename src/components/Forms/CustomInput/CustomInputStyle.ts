import styled from "styled-components";

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

	.input-label {
		color: var(--grey-color);
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 0.375rem;
	}

  .custom-input-field {
    height: 2.125rem;
    border: 1px solid var(--light-grey-color);
    border-radius: 0.5rem;
    padding: 0 0.5rem;

    &:focus {
      outline: none;
    }
  }
`;
