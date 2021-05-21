export const ADD_TWEETS = 'ADD_TWEETS';
export const SET_STATUS = 'SET_STATUS';

export const addTweets = (tweets) => ({
  type: ADD_TWEETS,
  payload: {
    tweets,
  },
});

export const fetchTweets = () => (dispatch) => {
  dispatch(setStatus('loading'));
  fetch('http://tweet-stream.glitch.me/api/tweets')
    .then((response) => response.json())
    .then((response) => {
      dispatch(addTweets(response.tweets));
      dispatch(setStatus('loaded'));
    })
    .catch(() => {
      dispatch(setStatus('error'));
    });
};

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: {
    status,
  },
});
