import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {appColors} from './src/theme';
import AppScreensStack from './src/appNavigation/appScreensStack';
import store from './src/redux';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/PostFiltersActionSheet/sheets';

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
