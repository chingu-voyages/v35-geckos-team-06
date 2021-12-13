import './App.css';
import { useLayoutEffect, useState, useReducer } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { PlayerContext } from './contexts/PlayerContext';
import Header from './components/Header/Header';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';
import Authorize from './components/Authorize/Authorize';
import { playerReducer } from './reducers/playerReducer';

function App() {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  // used useState instead of useReducer as everything inside userData changes on login/logout
  // can change to useReducer if needed
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    data: {},
    token: null,
  });

  const [playerData, dispatch] = useReducer(playerReducer, {
    device: 'mobile',
    current: {
      index: null,
      played: [],
      playlistId: null,
      playlistLength: null,
      track: {
        album: {
          albumId: null,
          image: null,
          name: null,
        },
        artists: [],
        duration: null,
        id: null,
        name: null,
        src: null,
      },
    },
    playlists: {},
    controls: {
      play: false,
      shuffle: false,
      repeat: false,
      mute: false,
      volume: 50,
    },
  });

  console.log('playerData', playerData);

  const showMenuBar =
    location.pathname !== '/' &&
    location.pathname !== '/login' &&
    location.pathname !== '/authorize';

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (width > 1023) {
      dispatch({ type: 'SET_DEVICE', device: 'desktop' });
    } else dispatch({ type: 'SET_DEVICE', device: 'mobile' });

    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, [width]);

  return (
    <div className='wrapper'>
      <UserContext.Provider value={{ userData, setUserData }}>
        <PlayerContext.Provider value={{ playerData, dispatch }}>
          {showMenuBar && <Header />}
          <Routes>
            <Route exact path='/' element={<WelcomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/authorize' element={<Authorize />} />
            <Route path='/home' element={<Homepage />} />
            <Route exact path='/library' element={<Library />} />
            <Route path='/library/:playlistId' element={<PlaylistPage />} />
            {width < 1024 && (
              <Route path='/nowplaying' element={<NowPlayingPage />} />
            )}
            <Route path='*' element={<p>404</p>} />
          </Routes>
          {showMenuBar && width > 1023 && <NowPlayingPage />}
          {showMenuBar && <MenuBar />}
        </PlayerContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
