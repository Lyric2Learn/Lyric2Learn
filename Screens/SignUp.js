import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { hp, wp } from '../Components/DimensionPixel'
import CustomText from '../Components/CustomText'
import CustomTextInput from '../Components/CustomTextInput'
import Username from '../Images/Svg/userLogin'
import Password from '../Images/Svg/password'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const header = 'Welcome Back'
    const title = 'Please, Log in.'
    const placeholder = 'Username'
    const placeholderPassword = '************'
    const continueName = 'Continue >';
    const createAccount = 'Log In';

    const gotoMainPage = () => {
        navigation.navigate('Tabs');
    }
    const gotoLogInPage = () => {
        navigation.navigate('Login');
    }

    
  return (
    <LinearGradient colors={['#9183de', '#a094e3']} style={styles.linear}>
    <Image source={require('../Images/Sallysecond.png')} style={styles.image} />
    <CustomText header={header} title={title} />
    <View style={styles.container}>
        <CustomTextInput icon={<Username />} placeholder={placeholder} onChangeText={setUsername} value={username} />
        <CustomTextInput icon={<Password />} placeholder={placeholderPassword} onChangeText={setPassword} value={password} />
    </View>
    <View style={styles.buttonContainer}>
        <CustomButton buttonColor={'#52439a'} buttonName={continueName} titleColor={'#FFF'} onPress={gotoMainPage} />

        <CustomButton buttonColor={'#ffffff47'} titleColor={'#FFF'} buttonName={createAccount} onPress={gotoLogInPage} buttonShadow={styles.buttonShadow}  />
    </View>

</LinearGradient>
  )
}

export default SignUp

const styles = StyleSheet.create({
  linear: {
    flex: 1,
},
image: {
    margin: wp('15%'),
    marginTop: hp('10%')
},
container: {
    marginTop: hp('3%'),
},
buttonShadow: {
    marginTop: hp('3%'),
    shadowColor: '##dcdcdc40',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 5,
  }
})