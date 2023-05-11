import styled from "styled-components";

export const NavbarContainer = styled.nav`
  padding: 0 0.75rem;
  width: calc(100vw - 1.5rem);
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  color: var(--white);
  position: fixed;
  top: 0;
  z-index: 100;

  .logo {
    font-size: 1.25rem;
    cursor: pointer;
  }

  .icons span {
    margin-left: 1.25rem;
    font-size: 0.95rem;
    cursor: pointer;

    img {
      border: 1px solid var(--white);
      border-radius: 50%;
      object-fit: cover;
      height: 2rem;
      width: 2rem;
    }
  }
`;
