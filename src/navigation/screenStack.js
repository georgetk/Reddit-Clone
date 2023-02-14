import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {ScreenNames} from '../utils';
import {PostsScreen} from '../screens/Posts';
import {CommentsScreen} from '../screens/Comments';

const Stack = createNativeStackNavigator();

const ScreenStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {true ? (
      // No token found, user isn't signed in
      <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
    ) : (
      // User is signed in
      <>
        <Stack.Screen name={ScreenNames.POSTS} component={PostsScreen} />
        <Stack.Screen name={ScreenNames.COMMENTS} component={CommentsScreen} />
      </>
    )}
  </Stack.Navigator>
);

export default ScreenStack;
