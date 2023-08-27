import { StyleSheet, Dimensions, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { wp, hp } from '../Components/DimensionPixel';
import CustomButton from '../Components/CustomButton';



const WelcomePage = ({navigation}) => {
  const letsGetStarted = 'Hadi Başlayalım...'

  const gotoLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <LinearGradient colors={['#E5B2CA', '#CF86DC']} style={styles.linear}>
      <Image source={require('../Images/Lyric2LearnLogo.png')} style={styles.logo} />
      <View style={styles.container}>
        <Image source={require('../Images/Note.png')} style={styles.note} />
        <Image source={require('../Images/SplashSally.png')} style={styles.splashSally} />
        <Image source={require('../Images/WelcomePageDrop.png')} style={styles.drop}/>
      </View>
      <CustomButton buttonColor={'#ffffff47'} buttonName={letsGetStarted} titleColor={'#FFF'} buttonShadow={styles.buttonShadow} onPress={gotoLogin}/>
    </LinearGradient>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  logo: {
    marginTop: hp('10%'),
    marginLeft: wp('15%'),
    resizeMode: 'contain'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('15%'),
    marginRight: hp('15%')
  },
  note: {
    marginTop: hp('5%'),
    marginLeft: wp('13%'),
    resizeMode: 'contain',

  },
  splashSally: {
    marginLeft: wp('15%'),
    marginTop: hp('-5%'),
    resizeMode: 'contain',
    width: wp('100%'),
  },
  drop:{
    marginTop: hp('-4%'),
    marginLeft: wp('7%'),
    marginRight: wp('-7%'),
    resizeMode: 'contain'
  }, 
  buttonShadow: {
    marginTop: hp('10%'),
    shadowColor: '##dcdcdc40',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 5,
  }
})