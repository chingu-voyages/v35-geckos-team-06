import styled, { keyframes } from 'styled-components';

const equalize = keyframes`
  0% {
    height: 60px;
  }
  4% {
    height: 50px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 60px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 70px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 50px;
  }
  68% {
    height: 60px;
  }
  72% {
    height: 70px;
  }
  76% {
    height: 80px;
  }
  80% {
    height: 70px;
  }
  84% {
    height: 60px;
  }
  88% {
    height: 50px;
  }
  92% {
    height: 60px;
  }
  96% {
    height: 70px;
  }
  100% {
    height: 80px;
  }
`;

export const Container = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 6;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--lt-background);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
  }
`;

export const Bar = styled.div`
  width: 10px;
  height: 36px;
  background: var(--lt-active-color);
  margin: 0 3px;
  animation: ${equalize} 1.25s steps(25, end) 0s infinite;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-active-color);
  }

  &:nth-child(1) {
    animation-duration: 1.9s;
  }

  &:nth-child(2) {
    animation-duration: 2s;
  }

  &:nth-child(3) {
    animation-duration: 2.3s;
  }

  &:nth-child(4) {
    animation-duration: 2.4s;
  }
  &:nth-child(5) {
    animation-duration: 3s;
  }

  &:nth-child(6) {
    animation-duration: 3.1s;
  }
`;
