import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router';

const TrackSearchResultContainer = styled.div`
  display: flex;
  margin: 2;
  align-items: center;
  cursor: pointer;
`;
const TrackInfo = styled.div`
  margin-left: 3;
`;
const Title = styled.div``;
const Artists = styled.div``;

const TrackSearchResult = ({track}) => {
    const navigate=useNavigate()
    return (
        <TrackSearchResultContainer
            key={track.uri}
            onClick={()=>
            navigate(`/library/${track.uri}`, {
                state: {type: `${track.title}`},
            })
            }
            >
            <img src={track.albumUrl} style={{height:'64px', width: '64px'}} alt=''/>
            <TrackInfo>
            <Title>{track.title}</Title>
            <Artists>{track.artists}</Artists>
            </TrackInfo>
        </TrackSearchResultContainer>
    )
}

export default TrackSearchResult;
