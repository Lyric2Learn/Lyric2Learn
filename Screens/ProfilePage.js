import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Password from '../Images/Svg/password';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { changePassword } from '../authentication/authService';
import { FIREBASE_AUTH } from '../authentication/firebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';
import { signOutUser } from '../authentication/authService';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfilePage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [oldPassword, setOldPassword] = useState(''); // Mevcut şifreyi saklayacak state değişkeni
  const navigation = useNavigation();

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    try {
      const user = FIREBASE_AUTH.currentUser; // Mevcut kullanıcıyı alın
      const email = user.email; // Kullanıcının e-postasını alın
      const oldPassword = 'MevcutParola'; // Kullanıcının mevcut parolasını burada belirtin

      // Şifre değiştirme işlemini çağırın
      const message = await changePassword(email, oldPassword, newPassword);
      setError(null); // Hata yoksa hata durumunu temizle
      setNewPassword(''); // Yeni şifreyi temizle
      setConfirmNewPassword(''); // Onay şifresini temizle
      // Kullanıcıya başarılı bir şekilde şifre değiştirildiğine dair bir bildirim gösterebilirsiniz.
      console.log(message);
    } catch (error) {
      console.error('Şifre değiştirme hatası:', error.message);
      setError('Şifre değiştirme hatası');
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser(navigation); // navigation nesnesini fonksiyona iletiyoruz
    } catch (error) {
      console.error('Çıkış yapma hatası:', error.message);
    }
  };

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <View style={styles.logoContainer}>
        <Image source={require('../Images/Lyric2LearnLogo.png')} />
      </View>
      <View style={styles.container}>
        <CustomTextInput icon={<Password />} placeholder='Mevcut Şifre' onChangeText={(text) => setOldPassword(text)} value={oldPassword} secureTextEntry />

        <CustomTextInput icon={<Password />} placeholder='Yeni Şifre' onChangeText={(text) => setNewPassword(text)} value={newPassword} secureTextEntry />
        <CustomTextInput
          icon={<Password />}
          placeholder='Yeni Şifre (Tekrar)'
          onChangeText={(text) => setConfirmNewPassword(text)}
          value={confirmNewPassword}
          secureTextEntry
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
