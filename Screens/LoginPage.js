import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { hp, wp } from '../Components/DimensionPixel';
import CustomText from '../Components/CustomText';
import CustomTextInput from '../Components/CustomTextInput';
import Username from '../Images/Svg/userLogin';
import Password from '../Images/Svg/password';
import CustomButton from '../Components/CustomButton';
import * as yup from 'yup';
import { signIn } from '../authentication/authService';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir e-posta girin')
    .required('E-posta zorunlu'),
  password: yup
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .required('Şifre zorunlu'),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const header = 'Welcome Back';
  const title = 'Please, Log in.';
  const continueName = 'Continue >';
  const createAccount = 'Create an Account';

  const gotoSignUpPage = () => {
    navigation.navigate('SignUp');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const user = await signIn(values.email, values.password);
        setLoading(false);
        console.log('Giriş Başarılı: ', user.uid);
        navigation.navigate('Tabs');
      } catch (error) {
        setLoading(false);
        console.error('Hata: ', error.message);
        Alert.alert('Hata', error.message);
      }
    },
  });

  return (
    <LinearGradient colors={['#e5b2ca', '#cd82de']} style={styles.linear}>
      <Image
        source={require('../Images/Sallyfirst.png')}
        style={styles.image}
      />
      <CustomText header={header} title={title} />
      <View style={styles.container}>
        <CustomTextInput
          icon={<Username />}
          placeholder='E-posta'
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={{ marginLeft: 50, marginBottom: 5 }}>
            *{formik.errors.email}
          </Text>
        ) : null}
        <CustomTextInput
          icon={<Password />}
          placeholder='Şifre'
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={{ marginLeft: 50, marginBottom: 5 }}>
            *{formik.errors.password}
          </Text>
        ) : null}
      </View>

      {loading ? (
        <ActivityIndicator size={'large'} color={'#0000fff'} />
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <CustomButton
              buttonColor={'#78258B'}
              buttonName={continueName}
              titleColor={'#FFF'}
              onPress={formik.handleSubmit}
            />

            <CustomButton
              buttonColor={'#ffffff47'}
              titleColor={'#FFF'}
              buttonName={createAccount}
              onPress={gotoSignUpPage}
              buttonShadow={styles.buttonShadow}
            />
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  image: {
    margin: wp('15%'),
    marginTop: hp('10%'),
  },
  container: {
    marginTop: hp('3%'),
  },
  buttonShadow: {
    marginTop: hp('3%'),
    shadowColor: '##dcdcdc40',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
