import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Password from '../Images/Svg/password';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { changePassword, signOutUser } from '../authentication/authService';
import { FIREBASE_AUTH } from '../authentication/firebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

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
        setError('*Şifreler uyuşmuyor!');
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
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../Images/Lyric2LearnLogo.png')} />
          </View>
          <View style={styles.backgroundView}>
            <View style={styles.imageContainer}>
              <Image style={styles.picProfile} source={require('../Images/Profile1.png')} />
            </View>
            <CustomTextInput
              icon={<Password />}
              placeholder='Current password'
              onChangeText={(text) => setOldPassword(text)}
              value={oldPassword}
              secureText={true}
              isLowerCase={false}
              widthStyle={windowWidth - 80}
              heightStyle={60}
            />
            <CustomTextInput
              icon={<Password />}
              placeholder='New Password'
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              secureText={true}
              isLowerCase={false}
              widthStyle={windowWidth - 80}
              heightStyle={60}
            />
            <CustomTextInput
              icon={<Password />}
              placeholder='New Password (Again)'
              onChangeText={(text) => setConfirmNewPassword(text)}
              value={confirmNewPassword}
              secureText={true}
              isLowerCase={false}
              widthStyle={windowWidth - 80}
              heightStyle={60}
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <View style={styles.buttonContainer}>
              <CustomButton
                buttonColor={'#E5B2CA'}
                titleColor={'#FFF'}
                buttonName={'Change Password'}
                onPress={handleChangePassword}
                buttonShadow={styles.buttonShadow}
              />
              <CustomButton buttonColor={'#E5B2CA'} titleColor={'#FFF'} buttonName={'Log Out'} onPress={handleLogout} buttonShadow={styles.buttonShadow} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidSafeArea: {
    flex: 1,
  },
  backgroundView: {
    flex: 1,
    backgroundColor: '#ffffff99',
    width: windowWidth - 32,
    margin: 16,
    borderRadius: 10,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  buttonShadow: {
    shadowColor: '##dcdcdc40',
    shadowOpacity: 0.2,
    shadowRadius: 3.85,
    elevation: 2,
    shadowOffset: { width: 3, height: 3 },
    alignItems: 'center',
    width: 200,
    height: 50,
  },
  picProfile: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  imageContainer: {
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default ProfilePage;
