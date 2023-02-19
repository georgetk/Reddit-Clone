import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {appColors} from './src/theme';
import AppScreensStack from './src/navigation/appScreensStack';
import store from './src/redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    marginHorizontal: 15,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <AppScreensStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
