import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreenStack} from './src/navigation';
import {Colors} from './src/utils';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ScreenStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
