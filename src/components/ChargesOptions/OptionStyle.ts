import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .text-block {
    display: flex;
    justify-content: space-between;

    .title {
      color: var(--primary-color);
      font-size: 0.875rem;
      font-weight: 600;
    }

    .switch {
      display: inline-block;
      width: 2.125rem;
      height: 1.1rem;
      background: var(--white);
			border: 1px solid var(--pink-color);
      border-radius: 25px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &.checked {
        border-color: var(--green-color);

        & .handle {
          left: calc(100% - 15.5px);
					background: var(--green-color);
        }
      }

      .handle {
        width: 0.75rem;
        height: 0.75rem;
        background: var(--pink-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 2.5px;
        transform: translateY(-50%);
        transition: left 0.1s ease-in-out, background-color 0.2s ease-in-out;
      }
    }
  }

  .desc {
    font-size: 0.675rem;
    color: var(--grey-color);
    width: 80%;
    margin-top: 0.25rem;
  }
`;
