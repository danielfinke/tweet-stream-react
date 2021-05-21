import { combineReducers } from 'redux';

import { ADD_TWEETS } from './actions';

const tweets = (tweets = [], { type, payload }) => {
  if (type === ADD_TWEETS) {
    return [...tweets, ...payload.tweets];
  }

  return tweets;
};

export default combineReducers({
  tweets,
});
