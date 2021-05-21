export const ADD_TWEETS = 'ADD_TWEETS';

export const addTweets = (tweets) => ({
  type: ADD_TWEETS,
  payload: {
    tweets,
  },
});

export const fetchTweets = () => (dispatch) => {
  fetch('http://tweet-stream.glitch.me/api/tweets')
    .then((response) => response.json())
    .then((response) => {
      dispatch(addTweets(response.tweets));
    });
};
