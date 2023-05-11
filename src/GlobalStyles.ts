import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--primary-color: #004BFF;
		--grey-color: #696969;
		--light-grey-color: #B4B4B4;
		--white: #FFFFFF;
		--black: #000000;

		--default-transition: 0.25s;
	}

  body, button, input, textarea {
    font-family: 'Inter', sans-serif;
  }

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default GlobalStyles;
