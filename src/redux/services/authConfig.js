import {ENV_VARS} from '../../constants';

export const REDDIT_AUTH_BASE_URL = ENV_VARS.REDDIT_AUTH_BASE_URL;

const REDDIT_AUTH_REDIRECT_URL = ENV_VARS.REDDIT_AUTH_REDIRECT_URL;

const REDDIT_CLIENT_SECRET = ENV_VARS.REDDIT_CLIENT_SECRET;

const REDDIT_CLIENT_SECRET_BASE64_ENCODE =
  ENV_VARS.REDDIT_CLIENT_SECRET_BASE64_ENCODE;

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
