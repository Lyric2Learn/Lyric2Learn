import { StyleSheet, Dimensions, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import CustomButton from '../Components/CustomButton';



const WelcomePage = ({ navigation }) => {
  const letsGetStarted = 'Hadi Başlayalım...'

  const gotoLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <LinearGradient colors={['#E5B2CA', '#CF86DC']} style={styles.linear}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../Images/Lyric2LearnLogo.png')} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../Images/Note.png')} style={styles.note} />
          <Image source={require('../Images/SplashSally.png')} style={styles.splashSally} />
          <Image source={require('../Images/WelcomePageDrop.png')} style={styles.drop} />
        </View>
        <CustomButton buttonColor={'#ffffff47'} buttonName={letsGetStarted} titleColor={'#FFF'} buttonShadow={styles.buttonShadow} onPress={gotoLogin} />
      </View>
    </LinearGradient>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignSelf: 'center'
  },
  imageContainer: {
    justifyContent:'space-between',
    alignItems: 'center',
  },
  note: {
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  splashSally: {
    flexBasis: '35%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -90,
  },
  drop: {
    marginTop: -30,
    alignSelf: 'center'
  },
  buttonShadow: {
    shadowColor: '##dcdcdc40',
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 5,
  }
})