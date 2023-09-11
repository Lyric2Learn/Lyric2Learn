import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Back from '../Images/Svg/back';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../Components/CustomModal';
import useVocabularyStore from '../Store/useStore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SongLyric = ({ route }) => {
  const navigation = useNavigation();
  const { song } = route.params;
  const [selectedWordInfo, setSelectedWordInfo] = useState({ en: "", tr: "", id: -1 });
  const [translation, setTranslation] = useState('');
  const [visible, setVisible] = useState(false);

  const addVocabulary = useVocabularyStore((state) => state.addVocabulary);

  const handleWordClick = (wordInfo) => {
    const _translation = song.translations.find(item => item.id === wordInfo.id);
    if (_translation) {
      setSelectedWordInfo(wordInfo);
      setTranslation(_translation.tr);
      setVisible(true);
    }
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedWordInfo({ en: "", tr: "", id: -1 });
    setTranslation('');
  };

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
            <Back />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={require('../Images/Lyric2LearnLogo.png')} />
          </View>
        </View>
        <View style={styles.backgroundImage}>
          <View style={styles.coverContainer}>
            <Image source={{ uri: song.imageURL }} style={styles.songImage} />
            <View style={styles.textContainer}>
              <Text style={styles.artist}>{song.artist}</Text>
              <Text style={styles.songTitle}>{song.songTitle}</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.lyricsContainer}>
              {song.lyrics.split(' ').map((word, index) => {
                const wordInfo = song.translations.find(item => item.en === word);
                const canBeTranslate = song.translations.some(item => item.en === word);
                const isFirstLetterCapitalized = /^[A-Z]/.test(word);

                return (
                  canBeTranslate ?
                    <Text key={index} onPress={() => handleWordClick(wordInfo)} style={styles.clickableWord}>
                      {word}
                    </Text>
                    :
                    <Text key={index} style={styles.lyrics}>
                      {word}
                    </Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
      <CustomModal
        visible={visible}
        onClose={closeModal}
        translation={translation.charAt(0).toUpperCase() + translation.slice(1)}
        word={selectedWordInfo.en.charAt(0).toUpperCase() + selectedWordInfo.en.slice(1)}
        save={() => addVocabulary(selectedWordInfo)}
        selectedWordInfo={selectedWordInfo}
      />
    </LinearGradient>
  );
};

export default SongLyric;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoContainer: {
    alignSelf: 'center',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: -10,
  },
  backgroundImage: {
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: windowHeight / 1.4,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,
  },
  coverContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  songImage: {
    width: windowWidth / 4,
    height: windowHeight / 8,
  },
  artist: {
    color: '#E5B2CA',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songTitle: {
    color: '#E5B2CA',
    fontSize: 16,
    marginBottom: 10,
  },
  lyrics: {
    color: '#E5B2CA',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.7,
    padding: 3,

  },
  clickableWord: {
    color: '#E5B2CA',
    fontWeight: 'bold',
    padding: 3,
    fontSize: 18,
    padding: 3,
    letterSpacing: 0.7,

  },
  lyricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
