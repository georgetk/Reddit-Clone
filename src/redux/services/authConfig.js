export const REDDIT_AUTH_BASE_URL = 'https://www.reddit.com/api/v1/';

const REDDIT_AUTH_REDIRECT_URL = 'com.redditclone://redirect';

const REDDIT_CLIENT_SECRET = 'qPvjx1U4j76Avp66wQtEBA';

const REDDIT_CLIENT_SECRET_BASE64_ENCODE = 'cVB2angxVTRqNzZBdnA2NndRdEVCQQ==';

const authConfig = {
  redirectUrl: REDDIT_AUTH_REDIRECT_URL,
  clientId: REDDIT_CLIENT_SECRET,
  clientSecret: '',
  scopes: ['read', 'mysubreddits'],
  serviceConfiguration: {
    authorizationEndpoint: `${REDDIT_AUTH_BASE_URL}authorize.compact`,
    tokenEndpoint: `${REDDIT_AUTH_BASE_URL}access_token`,
  },
  customHeaders: {
    token: {
      Authorization: `Basic ${REDDIT_CLIENT_SECRET_BASE64_ENCODE}`,
    },
  },
};

export {authConfig};
