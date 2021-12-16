import React, { useContext, useState, useEffect } from 'react';
import {
  Input,
  HeaderContainer,
  SearchBarContainer,
  ProfilePic,
  SearchResultContainer,
} from '../../styled/SearchBar';
import TrackSearchResult from './TrackSearchResult';
import { Search } from '@styled-icons/fluentui-system-filled';
import { UserContext } from '../../contexts/UserContext';
import SpotifyWebApi from 'spotify-web-api-node';

const SpotifyApi = new SpotifyWebApi({
  clientId: 'f573531847c5435e80f1ba528eceed98',
});

const Header = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  console.log('search', search);

  useEffect(() => {
    if (!token) return;
    SpotifyApi.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!token) return;

    let cancel = false;

    SpotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artists: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, token]);

  return (
    <HeaderContainer>
      <SearchBarContainer>
        <Input
          type='search'
          placeholder='search Songs/Artists/Albums' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search size={24} />
      </SearchBarContainer>
      <ProfilePic
        src={
          userData.data.images?.[0]?.url ||
          'https://puu.sh/IsNdG/069cf308d1.png'
        }
        alt='user avatar'
      />
      {search.length > 0 && (
        <SearchResultContainer>
          {searchResults.map((track) => (
            <TrackSearchResult track={track} key={track.url} />
          ))}
        </SearchResultContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
