import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

// Giriş yapma işlemi
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Kayıt olma işlemi
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Oturumu açık olan kullanıcıyı alma
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject,
    );
  });
};

// Oturumu kapatma işlemi
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Şifreyi değiştirme işlemi
export const changePassword = async (email, oldPassword, newPassword) => {
  try {
    // Kullanıcının mevcut şifresi ile oturum açma işlemi
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, oldPassword);
    const user = userCredential.user;

    // Yeni şifre ile güncelleme işlemi
    await updatePassword(user, newPassword);

    return 'Şifre başarıyla değiştirildi.';
  } catch (error) {
    throw error;
  }
};
