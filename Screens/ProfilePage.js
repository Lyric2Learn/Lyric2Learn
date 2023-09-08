import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Password from '../Images/Svg/password';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { changePassword, signOutUser } from '../authentication/authService';
import { FIREBASE_AUTH } from '../authentication/firebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfilePage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOutUser(navigation);
    } catch (error) {
      console.error('Çıkış yapma hatası:', error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        setError('Şifreler uyuşmuyor');
        return;
      }
      // Şifre değiştirme işlemini çağırın
      await changePassword(FIREBASE_AUTH.currentUser.email, oldPassword, newPassword);

      setError(null);
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');

      console.log('Şifre başarıyla değiştirildi.');
    } catch (error) {
      console.error('Şifre değiştirme hatası:', error.message);
      setError('Şifre değiştirme hatası');
    }
  };

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <View style={styles.logoContainer}>
        <Image source={require('../Images/Lyric2LearnLogo.png')} />
      </View>
      <View style={styles.container}>
        <CustomTextInput
          icon={<Password />}
          placeholder='Mevcut Şifre'
          onChangeText={(text) => setOldPassword(text)}
          value={oldPassword}
          secureText={true}
          isLowerCase={false}
        />

        <CustomTextInput
          icon={<Password />}
          placeholder='Yeni Şifre'
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
          secureText={true}
          isLowerCase={false}
        />
        <CustomTextInput
          icon={<Password />}
          placeholder='Yeni Şifre (Tekrar)'
          onChangeText={(text) => setConfirmNewPassword(text)}
          value={confirmNewPassword}
          secureText={true}
          isLowerCase={false}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <CustomButton
          buttonColor={'#E5B2CA'}
          titleColor={'#FFF'}
          buttonName={'Şifre Değiştir'}
          onPress={handleChangePassword}
          buttonShadow={styles.buttonShadow}
        />
        <CustomButton buttonColor={'#E5B2CA'} titleColor={'#FFF'} buttonName={'Çıkış Yap'} onPress={handleLogout} buttonShadow={styles.buttonShadow} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: windowHeight / 1.4,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,
    marginTop: 100,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    marginLeft: 30,
    marginTop: 50,
    marginBottom: -80,
  },
});

export default ProfilePage;
