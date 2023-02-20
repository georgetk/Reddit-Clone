import React, {useCallback, useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, Loader} from '../../components';
import {commonStyles} from '../../constants';
import {loginRequest} from '../../redux/actions';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.login);

  useEffect(() => {}, []);

  const handleLogin = useCallback(() => {
    dispatch(loginRequest());
  }, []);

  return (
    <View style={[commonStyles.whiteContainer, styles.container]}>
      {loading ? <Loader /> : null}

      <Pressable onPress={handleLogin} style={styles.pressable}>
        <CustomText string={'LOGIN'} style={commonStyles.bold20} />
      </Pressable>
    </View>
  );
};

export default LoginScreen;
