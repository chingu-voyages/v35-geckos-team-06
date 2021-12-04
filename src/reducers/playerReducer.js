import { SteamDimensions } from '@styled-icons/boxicons-logos/Steam';

export const initialPlayerState = {
  currentTrack: null,
  playlists: {},
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_PLAYLIST':
      return {
        ...state,
        playlists: {
          ...state.playlists,
          [action.id]: action.playlist,
        },
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: {
          ...state.current,
          index: action.index,
          track: action.track,
          playlistId: action.playlistId,
          playlistLength: action.playlistLength,
          shuffle:
            state.current?.shuffle === undefined
              ? false
              : state.current.shuffle === true
              ? true
              : state.current.shuffle === false && false,
        },
      };
    case 'SET_DEVICE':
      return {
        ...state,
        device: action.device,
      };

    case 'TOGGLE_SHUFFLE':
      return {
        ...state,
        current: {
          ...state.current,
          shuffle: !state.current.shuffle,
        },
      };

    case 'NEXT_TRACK':
      return {
        ...state,
        current: {
          ...state.current,
          index: state.current.index + 1,
          track:
            state.playlists[state.current.playlistId].tracks[
              state.current.index + 1
            ],
        },
      };
    default:
      return state;
  }
};
