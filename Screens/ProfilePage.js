import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfilePage = () => {
  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <View style={styles.container}>
           {/* Lyric2Learn adlı Logo  */}
           <View style={styles.logoContainer}>
              <Image source={require('../Images/Lyric2LearnLogo.png')} />
            </View>
           <View style={styles.backgroundView}>
              
           </View>
      </View>
    </LinearGradient>
  )
}

export default ProfilePage

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
    marginBottom: -50,
    marginTop: 20,
    marginLeft: 30,

  },
  backgroundView: {
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: windowHeight / 1.6,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,

  },
})