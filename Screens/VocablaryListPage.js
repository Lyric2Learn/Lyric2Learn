import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import useVocabularyStore from '../Store/useStore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VocablaryListPage = () => {
  const vocabulary = useVocabularyStore((state) => state.vocabulary);

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../Images/Lyric2LearnLogo.png')} />
        </View>
        <View style={styles.backgroundView}>
          <ScrollView>
            {vocabulary.map((item, index) => (
              <Text key={index} style={styles.word}>
                {item.word} : {item.translation}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default VocablaryListPage;

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
    marginLeft: 30,
    marginTop: 20,
    marginBottom: -50,
  },
  backgroundView: {
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: windowHeight / 1.4,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,
  },
  word: {
    alignSelf: 'center',
    textAlign: 'left',
    height: windowHeight / 16,
    width: windowWidth / 1.2,
    margin: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.7,
    color: '#E5B2CA',
  },
});
