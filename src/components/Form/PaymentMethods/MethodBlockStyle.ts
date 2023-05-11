import styled from "styled-components";

export const CollapsibleBlock = styled.div`
  border: 1px solid var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  cursor: pointer;

  .collapsible-block-header {
    display: flex;
    justify-content: space-between;

    .method-name {
      color: var(--black);
      font-size: 0.875rem;
      font-weight: 600;

      .circle {
        height: 0.875rem;
        width: 0.875rem;
        background: var(--white);
        border: 1px solid var(--grey-color);
        border-radius: 50%;
        margin-right: 0.5rem;

        &.selected {
          background: var(--primary-color);
        }
      }
    }

    .method-value {
      color: var(--grey-color);
      font-size: 0.875rem;
      font-weight: 400;

      .text {
        margin-right: 0.5rem;
      }
    }
  }

  .collapsible-block-content {
    color: var(--grey-color);
    font-size: 0.75rem;
    margin: 1.5rem 0 -0.75rem;

    p {
      margin: 0.5rem 0;
    }
  }
`;
