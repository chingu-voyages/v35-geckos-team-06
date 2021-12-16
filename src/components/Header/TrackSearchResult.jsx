import React from 'react';
import {
  Artists,
  Title,
  TrackCover,
  TrackInfo,
  TrackSearchResultContainer,
} from '../../styled/SearchBar';

const TrackSearchResult = ({ track, chooseTrack }) => {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <TrackSearchResultContainer onClick={handlePlay}>
      <TrackCover src={track.albumUrl} alt='track album cover' />
      <TrackInfo>
        <Title>{track.title}</Title>
        <Artists>{track.artists}</Artists>
      </TrackInfo>
    </TrackSearchResultContainer>
  );
};

export default TrackSearchResult;
