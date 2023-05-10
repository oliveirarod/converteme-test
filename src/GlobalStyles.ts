import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--primary-color: #004BFF;
		--grey-color: #696969;
		--white: #FFFFFF;
	}

  body, button {
    font-family: 'Inter', sans-serif;
  }

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default GlobalStyles;
