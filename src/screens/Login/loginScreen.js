import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.login);

  useEffect(() => {}, []);

  const handleLogin = useCallback(() => {
    dispatch(loginRequest());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
      }}>
      {/* {!loading ? (
        <View
          style={{
            ...StyleSheet.absoluteFill,
            alignSelf: 'center',
            position: 'absolute',
            flex: 1,
            elevation: 1,
            width: '100%',
            height: '100%',
          // backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      ) : null} */}
      <Pressable
        onPress={handleLogin}
        style={{
          backgroundColor: 'salmon',
          width: '80%',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
