import styled from 'styled-components/macro';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const NowPlayingContainer = styled.div`
  grid-row: 1/7;
  grid-column: 1/7;
  height: calc(100% - 48px);
  margin-bottom: 48px;
  background: var(--lt-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--lt-body-font-regular);
  font: var(--font-body);

  h5 {
    font: var(--h5-bold);
    color: var(--lt-body-font-bold);
    margin-top: 4.45vh;
  }

  @media (prefers-color-scheme: dark) {
    background: var(--dt-background);
    color: var(--dt-body-font-regular);
    justify-content: center;
    h5 {
      color: var(--dt-body-font-bold);
    }
  }
  @media screen and (min-width: 1024px) {
    height: 90px;
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    z-index: 100;
    background: var(--lt-navbar-background);
    @media (prefers-color-scheme: dark) {
      background: var(--dt-navbar-background);
    }

    h5 {
      margin-top: 0;
      font: var(--font-body-bold);
    }
  }
`;

export const PlayerControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 292px;

  @media screen and (min-width: 1024px) {
    width: 192px;
    height: 32px;
  }
`;

export const StyledPlayerButton = styled.button`
  height: ${(props) => props.size || '36px'};
  width: ${(props) => props.size || '36px'};
  background: ${(props) => {
    return props.size ||
      (props?.status?.shuffle && props.icon === 'shuffle') ||
      (props?.status?.repeat && props.icon === 'repeat')
      ? 'var(--dt-radial-gradient)'
      : 'transparent';
  }};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: none;
  transition: transform 0.1s;
  cursor: ${(props) => props.disabled && 'not-allowed'};
  &:hover {
    transform: ${(props) => props.size && 'scale(1.05)'};
  }

  @media screen and (min-width: 1024px) {
    height: 32px;
    width: 32px;
  }
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: var(--lt-body-font-bold);
    height: 36px;
    width: 36px;

    ${StyledPlayerButton}:hover & {
      color: var(--cl-primary1-800);
    }

    @media (prefers-color-scheme: dark) {
      color: var(--dt-body-font-bold);
      ${StyledPlayerButton}:hover & {
        color: var(--cl-primary1-300);
      }
    }

    @media screen and (min-width: 1024px) {
      height: ${(props) => (props.type === 'volume' ? '24px' : '16px')};
      width: ${(props) => (props.type === 'volume' ? '24px' : '16px')};
    }
  }
`;

export const AlbumCover = styled.img`
  max-width: 75%;
  max-height: 33%;
  height: auto;
  width: auto;
  border-radius: 25%;
  aspect-ratio: 1;

  @media screen and (min-width: 1024px) {
    border-radius: 0;
    position: absolute;
    max-width: calc(100vw / 6);
    max-height: calc(100vw / 6);
    width: calc(100vw / 6);
    height: calc(100vw / 6);
    left: 0;
    bottom: 90px;
    z-index: 100;
  }
`;

export const ProgressTextContainer = styled.div`
  width: 100%;
  height: 27px;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.58vh;
  position: relative;
  bottom: 0.67vh;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    position: absolute;
    bottom: 14px;
    width: calc(100vw / 3 + 100px);
    max-width: calc(100vw / 3 + 100px);
  }
`;

export const SongInfoTextContainer = styled.div`
  margin-bottom: 5.6vh;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
    margin-bottom: 0;
    width: calc(100vw / 3);
  }
`;

export const PlayingFrom = styled.p`
  font: var(--font-body-small-bold);
  margin-top: 2.24vh;
  margin-bottom: 3.36vh;
  @media (prefers-color-scheme: dark) {
    color: var(--cl-primary1-50);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

// https://codesandbox.io/s/input-range-custom-styled-components-x149y?file=/src/index.js
const upperColor = 'rgb(124, 26, 4)';
const lowerColor = 'var(--cl-primary3-500)';
const thumbColor = 'var(--cl-primary3-700)';
const thumbHoverColor = 'var(--cl-primary3-900)';
const trackHeight = '4px';
const height = '32px';
const thumbHeight = 0;
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color, size) => {
  let i = 1;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 1000; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export const ProgressBar = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 500px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;
  background: transparent;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
    position: relative;
    z-index: 100;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: transparent;
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, '2px')};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: transparent;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: transparent;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

export const PlayerContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: calc(100vw / 3);
    max-width: calc(100vw / 3);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const VolumeControlContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    width: calc(100vw / 3);
    height: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const VolumeControl = styled(ProgressBar)`
  width: calc(100vw / 12);
  margin-left: 8px;
`;
