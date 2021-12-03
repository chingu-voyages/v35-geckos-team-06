import './App.css';
import { useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import NowPlayingPage from './components/Player/NowPlayingPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login.js';
import PlaylistPage from './components/Playlist/PlaylistPage';
import MenuBar from './components/Footer/MenuBar/MenuBar';
import Homepage from './components/Homepage/Homepage';
import Library from './components/LibraryPage/Library';
import Authorize from './components/Authorize/Authorize';

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

  console.log('userData', userData);

  const showMenuBar =
    location.pathname !== '/' && location.pathname !== '/login';

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, [width]);

  return (
    <div className='wrapper'>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/authorize' element={<Authorize />} />
          <Route path='/home' element={<Homepage />} />
          <Route exact path='/library' element={<Library />} />
          <Route
            path='/library/:playlistId'
            element={
              <PlaylistPage
                name='Chvrches Playlist'
                type='Playlist'
                creator='Emir'
              />
            }
          />
          {width < 1024 && (
            <Route path='/nowplaying' element={<NowPlayingPage />} />
          )}
          <Route path='*' element={<p>404</p>} />
        </Routes>
        {showMenuBar && width > 1023 && <NowPlayingPage />}
        {showMenuBar && <MenuBar />}
      </UserContext.Provider>
      {/* TO DO:
      - create a private route
      - create a route for now playing
      */}
    </div>
  );
}

export default App;
