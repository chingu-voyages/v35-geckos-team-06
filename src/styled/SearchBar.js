import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 96px;
  background: var(--lt-navbar-background);
  position: fixed;
  padding: 0 16px;
  top: 0;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
  }

  @media screen and (min-width: 1024px) {
    height: 104px;
    width: calc(100vw - calc(100vw / 6));
    right: 0;
    background: var(--lt-background);
    justify-content: flex-end;
    @media (prefers-color-scheme: dark) {
      background: var(--dt-background);
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 75%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding-right: 20px;
  border: 1px solid var(--dt-active-color);
  color: var(--lt-body-font-bold);
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);
  }
  @media screen and (min-width: 1024px) {
    width: 292px;
    margin-right: 24px;
  }
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  height: 40px;
  border-radius: 50px;
  font: var(--font-body);
  background: transparent;
  border: none;
  outline: none;
  padding-left: 20px;
  color: var(--lt-body-font-bold);
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);
  }
`;

export const ProfilePic = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 100%;
  @media screen and (min-width: 1024px) {
    margin-right: 24px;
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0 16px;
  left: 0;
  width: calc(100vw - 32px);
  height: auto;
  max-height: 338px;
  overflow: hidden;
  top: 75px;
  background: var(--lt-navbar-background);
  z-index: 9999;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  padding: 16px 16px 8px 16px;
  border-radius: 10px;

  @media (prefers-color-scheme: dark) {
    background: var(--dt-navbar-background);
    box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.7);
  }
  @media screen and (min-width: 1024px) {
    width: calc(100vw * 5 / 6 - 48px);
    margin: 0 24px;
    top: 94px;
    padding: 24px 24px 0 24px;
    height: auto;
    max-height: 424px;
  }
`;

export const TrackSearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const TrackCover = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 14px;
  box-shadow: 0px 0px 8px 2px rgba(0, 14, 51, 0.2);
  margin-right: 8px;
`;
export const TrackInfo = styled.div`
  margin-left: 3;
`;

export const Title = styled.h5`
  font: var(--font-body-small-bold);
  color: var(--lt-body-font-bold);
  transition: 0.2s all;

  ${TrackSearchResultContainer}:hover & {
    color: var(--lt-active-color);
  }
  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-bold);

    ${TrackSearchResultContainer}:hover & {
      color: var(--dt-active-color);
    }
  }

  @media screen and (min-width: 1024px) {
    font: var(--font-body-bold);
  }
`;

export const Artists = styled.p`
  font: var(--font-body-small);
  color: var(--lt-body-font-regular);
  transition: 0.2s all;
  ${TrackSearchResultContainer}:hover & {
    color: var(--lt-active-color);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--dt-body-font-regular);
    ${TrackSearchResultContainer}:hover & {
      color: var(--dt-active-color);
    }
  }

  @media screen and (min-width: 1024px) {
    font: var(--font-body);
  }
`;
