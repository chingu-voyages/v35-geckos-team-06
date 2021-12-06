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
          repeat:
            state.current?.repeat === undefined
              ? false
              : state.current.repeat === true
              ? true
              : state.current.repeat === false && false,
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
      const nextTrack = () => {
        if (state.current.shuffle) {
          return Math.floor(Math.random() * state.current.playlistLength);
        } else {
          if (state.current.repeat) {
            if (state.current.index === state.current.playlistLength - 1) {
              return 0;
            } else return state.current.index + 1;
          } else if (!state.current.repeat) {
            if (state.current.index === state.current.playlistLength - 1) {
              return state.current.index;
            } else return state.current.index + 1;
          }
        }
      };

      let next = nextTrack(); // to have a same index in return object

      return {
        ...state,
        current: {
          ...state.current,
          index: next,
          track: state.playlists[state.current.playlistId].tracks[next],
        },
      };

    case 'ADD_PLAYED':
      let played = [];
      console.log('ADD_PLAYED - played:', state.current.played);
      if (!state.current?.played) {
        played.push(action.index);
      } else played = [...state.current.played, action.index];

      return {
        ...state,
        current: {
          ...state.current,
          played,
        },
      };

    case 'PREV_TRACK':
      if (!state.current?.played || state.current.played.length === 1) {
        return state;
      } else {
        let played = [...state.current.played];
        return {
          ...state,
          current: {
            ...state.current,
            index: played[played.length - 2],
            played: played.slice(0, -2), // -2 because ADD_PLAYED will add the song again
            track:
              state.playlists[state.current.playlistId].tracks[
                played[played.length - 2]
              ],
          },
        };
      }

    case 'TOGGLE_REPEAT':
      return {
        ...state,
        current: {
          ...state.current,
          repeat: !state.current.repeat,
        },
      };

    default:
      return state;
  }
};
