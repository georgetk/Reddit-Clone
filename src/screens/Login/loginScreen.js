import React, {useCallback, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../components';
import {loginRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.login);

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
      {loading ? <Loader /> : null}

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
