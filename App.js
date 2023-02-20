import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {appColors} from './src/theme';
import store from './src/redux';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/PostFiltersActionSheet/sheets';
import AppScreensStack from './src/appNavigation';

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
      <SheetProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <AppScreensStack />
          </NavigationContainer>
        </SafeAreaView>
      </SheetProvider>
    </Provider>
  );
};

export default App;
