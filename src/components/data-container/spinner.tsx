import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const Spinner = styled.div`
  display: block;
  margin: auto;
  height: 2em;
  width: 2em;
  border: 6px solid rgba(50, 205, 50, 0.2);
  border-top-color: rgba(50, 205, 50, 0.8);
  border-radius: 50%;
  animation: ${rotation} 0.6s infinite linear;
`;
