import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {PostsScreen} from '../screens/Posts';
import {CommentsScreen} from '../screens/Comments';
import ScreenNames from './screenNames';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppScreensStack = () => {
  const {user} = useSelector(state => state.login);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user?.accessToken ? (
        // No token found, user isn't signed in
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
      ) : (
        // User is signed in
        <>
          <Stack.Screen name={ScreenNames.POSTS} component={PostsScreen} />
          <Stack.Screen
            name={ScreenNames.COMMENTS}
            component={CommentsScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppScreensStack;
