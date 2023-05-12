import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 3px 6px #00000029;
  border-radius: 0.5rem;
  padding: 0.75rem;

  .card-title {
    color: var(--grey-color);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.125rem;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;
