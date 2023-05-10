import styled from "styled-components";

export const StepperContainer = styled.div`
  position: relative;
`;

export const Circles = styled.div`
  display: flex;
  justify-content: space-between;

  .stepper {
    flex-direction: column;
    justify-content: space-between;

    .circle {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 1.5px solid var(--grey-color);
      background: var(--white);
      z-index: 1;
      transition: var(--default-transition);
      cursor: pointer;

      .number {
        color: var(--grey-color);
        font-size: 1.125rem;
        font-weight: bold;
      }

      &.active {
        border-color: var(--primary-color);

        .number {
          color: var(--primary-color);
        }
      }

      &.completed {
        background: var(--primary-color);
        border-color: var(--primary-color);

        .number {
          color: var(--white);
        }
      }
    }

    .label {
      margin: 0.5rem auto auto;
      color: var(--grey-color);
    }
  }
`;

export const Connections = styled.div`
  width: calc(100% - 5rem);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 3.5rem;
  top: 1.125rem;

  .connection {
    width: 33%;
    height: 2px;
    background: var(--grey-color);

    &.completed {
      background: var(--primary-color);
    }
  }
`;
