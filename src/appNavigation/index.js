import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import PostsScreen from '../screens/Posts';
import CommentsScreen from '../screens/Comments';
import {useSelector} from 'react-redux';
import SubredditsScreen from '../screens/Subreddits';
import {SCREEN_NAMES} from '../constants';

const Stack = createNativeStackNavigator();

const AppScreensStack = () => {
  const {user} = useSelector(state => state.login);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user?.accessToken ? (
        // No token found, user isn't signed in
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
      ) : (
        // User is signed in
        <>
          <Stack.Screen
            name={SCREEN_NAMES.SUBREDDITS}
            component={SubredditsScreen}
          />
          <Stack.Screen name={SCREEN_NAMES.POSTS} component={PostsScreen} />
          <Stack.Screen
            name={SCREEN_NAMES.COMMENTS}
            component={CommentsScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppScreensStack;
