import styled from "styled-components";

export const NavbarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  color: var(--white);

  .logo {
    font-size: 1.25rem;
  }

  .icons span {
    margin-left: 1rem;
  }
`;
