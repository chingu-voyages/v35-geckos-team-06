import React, { useState, useContext} from 'react';
import Player from './Player';
import {
  AlbumCover,
  NowPlayingContainer,
  SongInfoTextContainer,
} from '../../styled/NowPlaying';
import VolumeBar from './VolumeBar';
import { PlayerContext } from '../../contexts/PlayerContext';

const NowPlayingPage = () => {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const { playerData } = useContext(PlayerContext);
  const { current } = playerData;
  
  

  return (
    <NowPlayingContainer>
      {current && <AlbumCover src={current.track.album.image} />}
      <SongInfoTextContainer>
        {current && <h5>{current.track.name}</h5>}
        {current && <p>{current.track.artists[0]}</p>}
      </SongInfoTextContainer>
      <Player
        max={30}
        src={current?.track.src}
        volume={{ volume, setVolume }}
        muted={muted}
      />
      <VolumeBar
        volume={{ volume, setVolume }}
        setMuted={setMuted}
        muted={muted}
      />
    </NowPlayingContainer>
  );
};
export default NowPlayingPage;
