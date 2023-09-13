import { StyleSheet, View, Image, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import React, { useRef, useState, } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import useVocabularyStore from '../Store/useStore';
import CustomVocablary from '../Components/CustomVocablary';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VocablaryListPage = () => {
  const vocabulary = useVocabularyStore((state) => state.vocabulary);

  const scrollRef = useRef(null);


  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../Images/Lyric2LearnLogo.png')} />
          </View>
          <View style={styles.backgroundView}>
            <GestureHandlerRootView>
              <ScrollView ref={scrollRef} style={{ height: windowHeight / 1.5 }}>
                {vocabulary.map((item) => (
                  <CustomVocablary item={item} key={item.id}
                    simultaneousHandlers={scrollRef} />
                ))}
              </ScrollView>
            </GestureHandlerRootView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default VocablaryListPage;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: -30,
  },
  backgroundView: {
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: Platform.OS === 'android' ? windowHeight / 1.23 : windowHeight / 1.36,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }

});