export const REDDIT_AUTH_BASE_URL = 'https://www.reddit.com/api/v1/';

const REDDIT_AUTH_REDIRECT_URL = 'com.redditclone://redirect';

const REDDIT_CLIENT_SECRET = 'qPvjx1U4j76Avp66wQtEBA';

const authConfig = {
  redirectUrl: REDDIT_AUTH_REDIRECT_URL,
  clientId: REDDIT_CLIENT_SECRET,
  clientSecret: '',
  scopes: [
    'identity',
    'edit',
    'subscribe',
    'save',
    'submit',
    'read',
    'modconfig',
    'account',
    'vote',
    'flair',
    'mysubreddits',
    'modposts',
  ],
  serviceConfiguration: {
    authorizationEndpoint: `${REDDIT_AUTH_BASE_URL}authorize.compact`,
    tokenEndpoint: `${REDDIT_AUTH_BASE_URL}access_token`,
  },
  customHeaders: {
    token: {
      Authorization: 'Basic cVB2angxVTRqNzZBdnA2NndRdEVCQQ==',
    },
  },
};

export {authConfig};
