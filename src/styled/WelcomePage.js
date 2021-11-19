import styled from 'styled-components';
import resonanceDark from '../resonance-dark.svg';
import resonanceLight from '../resonance-light-welcome.svg';


export const StyledWrapper = styled.div`
 
  background: var(--lt-background);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  
  @media (prefers-color-scheme: dark) {
    background : var(--dt-background);
  }

`;

export const TopContainer = styled.div`
  grid-row: 1 / 1;
  grid-column: 2 / 6;
  align-self: end;
  justify-self: center;
  
  p {
    color: var(--cl-primary1-600);
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 24px;
    margin-top: 20px;
  }

  @media (prefers-color-scheme: dark) {
    p {
      color: #FFFFFF;
    }
  }
`;
export const Logo = styled.img.attrs(() => ({
  src: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
                ? resonanceDark 
                : resonanceLight,
  }))`
  object-fit: cover;
`;

export const CenterContainer = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 6;
`;

export const ButtonContainer = styled.div`
  margin: 25% auto;
  width: 162px;
  height: 162px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--cl-primary1-700);

  @media (prefers-color-scheme: dark) {
    background: var(--dt-radial-gradient);
  } 
`;

