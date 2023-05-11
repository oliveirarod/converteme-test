import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--primary-color: #004BFF;
		--grey-color: #696969;
		--light-grey-color: #B4B4B4;
		--white: #FFFFFF;
		--black: #000000;

		--default-transition: 0.25s;
		--sidebar-width: 225px;
		--navbar-height: 65px;
	}

  body, button, input, textarea {
    font-family: 'Inter', sans-serif;
  }

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.input-label {
		color: var(--grey-color);
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 0.375rem;
	}

	.custom-form-control-field {
    height: 100%;
    border: 1px solid var(--light-grey-color);
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    color: var(--grey-color);
		min-width: 200px;

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyles;
