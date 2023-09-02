import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Password from '../Images/Svg/password';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { changePassword } from '../authentication/authService'; // changePassword fonksiyonunu içe aktarın
import { FIREBASE_AUTH } from '../authentication/firebaseConfig';

const ProfilePage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [oldPassword, setOldPassword] = useState(''); // Mevcut şifreyi saklayacak state değişkeni

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

  return (
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
        buttonColor={'#ffffff47'}
        titleColor={'#FFF'}
        buttonName={'Şifre Değiştir'}
        onPress={handleChangePassword}
        buttonShadow={styles.buttonShadow}
      />
    </View>
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
    backgroundColor: 'gray',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ProfilePage;
