import { StyleSheet, Text, View, Image, ActivityIndicator, Alert, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import CustomText from '../Components/CustomText';
import CustomTextInput from '../Components/CustomTextInput';
import Username from '../Images/Svg/userLogin';
import Password from '../Images/Svg/password';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { signUp } from '../authentication/authService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

//Dimensions
const windowWidth = Dimensions.get('window').width;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const header = 'Hi There!';
  const title = "Let' s Get Started!";
  const continueName = 'Continue >';
  const createAccount = 'Log In';

  //Validation Error
  const validationSchema = yup.object().shape({
    email: yup.string().email('*Geçerli bir e-posta girin!').required('*E-posta zorunlu!'),
    password: yup.string().min(6, '*Şifre en az 6 karakter olmalı!').required('*Şifre zorunlu!'),
  });

  //Validation Control
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const user = await signUp(values.email, values.password);
        setLoading(false);
        console.log('Kullanıcı Oluşturuldu: ', user.uid);
        navigation.navigate('Tabs');
      } catch (error) {
        setLoading(false);
        console.error('Hata: ', error.message);
        Alert.alert('Hata', error.message);
      }
    },
  });

  const gotoLogInPage = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={['#9183de', '#a094e3']} style={styles.linear}>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.androidSafeArea}>
          {/* SallySecond Image */}
          <Image source={require('../Images/Sallysecond.png')} style={styles.image} />
          {/* Sign Up Text */}
          <CustomText header={header} title={title} />
          {/* TextInput */}
          <View style={styles.container}>
            <CustomTextInput
              icon={<Username />}
              placeholder='E-posta'
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              secureText={false}
              isLowerCase={true}
              widthStyle={windowWidth - 40}
              heightStyle={75}
            />
            {formik.touched.email && formik.errors.email ? <Text style={{ marginLeft: 50, marginBottom: 5 }}>*{formik.errors.email}</Text> : null}
            <CustomTextInput
              icon={<Password />}
              placeholder='Password'
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              secureText={true}
              isLowerCase={false}
              widthStyle={windowWidth - 40}
              heightStyle={75}
            />
            {formik.touched.password && formik.errors.password ? <Text style={{ marginLeft: 50, marginBottom: 5 }}>*{formik.errors.password}</Text> : null}
          </View>

          {loading ? (
            <ActivityIndicator size={'large'} color={'#0000fff'} />
          ) : (
            <>
              {/* Button */}
              <View style={styles.buttonContainer}>
                <CustomButton buttonColor={'#52439a'} buttonName={continueName} titleColor={'#FFF'} onPress={formik.handleSubmit} />

                <CustomButton
                  buttonColor={'#ffffff47'}
                  titleColor={'#FFF'}
                  buttonName={createAccount}
                  onPress={gotoLogInPage}
                  buttonShadow={styles.buttonShadow}
                />
              </View>
            </>
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: windowWidth - 30,
    marginBottom: 5,
  },
  inputcontainer: {
    marginTop: 3,
    marginBottom: 3,
  },
  buttonShadow: {
    marginTop: 3,
    shadowColor: '##dcdcdc40',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
    elevation: 2,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  androidSafeArea: {
    flex: 1,
  },
});
