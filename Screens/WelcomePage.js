import { StyleSheet, Dimensions, Image, View } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../Components/CustomButton';
import { getCurrentUser } from '../authentication/authService';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const WelcomePage = () => {
  const letsGetStarted = "Let' s Get Started...";
  const navigation = useNavigation();

  useEffect(() => {
    // Sayfa açıldığında mevcut kullanıcıyı kontrol et
    const checkCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          // Oturum açık bir kullanıcı varsa, Tabs sayfasına yönlendir
          navigation.navigate('Tabs');
        }
      } catch (error) {
        console.error('Oturum açık kullanıcı kontrol hatası:', error.message);
      }
    };

    checkCurrentUser();
  }, []); // Boş bağımlılık dizisi, bu etkileşimi yalnızca bir kez çalıştırır

  const gotoLogin = () => {
    navigation.navigate('Login');
  };
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
        <View style={styles.buttonContainer}>
          <CustomButton buttonColor={'#ffffff47'} buttonName={letsGetStarted} titleColor={'#FFF'} buttonShadow={styles.buttonShadow} onPress={gotoLogin} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  imageContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  note: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  splashSally: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -90,
    width: width - 20,
  },
  drop: {
    width: width - 100,
    marginTop: -40,
    alignSelf: 'center',
  },
  buttonShadow: {
    shadowColor: '##dcdcdc40',
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
