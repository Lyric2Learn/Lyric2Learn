import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import CustomText from '../Components/CustomText'
import CustomTextInput from '../Components/CustomTextInput'
import Username from '../Images/Svg/userLogin'
import Password from '../Images/Svg/password'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const header = 'Welcome Back'
    const title = 'Please, Log in.'
    const placeholder = 'Username'
    const placeholderPassword = '************'
    const continueName = 'Continue >';
    const createAccount = 'Create an Account';

    const gotoMainPage = () => {
        navigation.navigate('Tabs');
    }
    const gotoSignUpPage = () => {
        navigation.navigate('SignUp');
    }


    return (
        <LinearGradient colors={['#e5b2ca', '#cd82de']} style={styles.linear}>
            <View style={styles.container}>
                <Image source={require('../Images/Sallyfirst.png')} style={styles.image} />
                <CustomText header={header} title={title} />
                <View style={styles.inputcontainer}>
                    <CustomTextInput icon={<Username />} placeholder={placeholder} onChangeText={setUsername} value={username} secureText={false}/>
                    <CustomTextInput icon={<Password />} placeholder={placeholderPassword} onChangeText={setPassword} value={password} secureText={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton buttonColor={'#78258B'} buttonName={continueName} titleColor={'#FFF'} onPress={gotoMainPage} />
                    <CustomButton buttonColor={'#ffffff47'} titleColor={'#FFF'} buttonName={createAccount} onPress={gotoSignUpPage} buttonShadow={styles.buttonShadow} />
                </View>
            </View>

        </LinearGradient>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    linear: {
        flex: 1,
    },
    container:{
        flex: 1,
        justifyContent:'center', 
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center', 
    },
    inputcontainer: {
        marginTop: 3,
        marginBottom: 3,
    },
    buttonShadow: {
        marginTop: 3,
        shadowColor: '##dcdcdc40',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.10,
        shadowRadius: 3.0,
        elevation: 2,
    },
})