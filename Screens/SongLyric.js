import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Back from '../Images/Svg/back';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../Components/CustomModal';
import useVocabularyStore from '../Store/useStore';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

const SongLyric = ({ route }) => {
  const navigation = useNavigation();
  const { song } = route.params;
  const [selectedWordInfo, setSelectedWordInfo] = useState({ en: "", tr: "", id: -1 });
  const [visible, setVisible] = useState(false);
  const [wordList, setWordList] = useState([]);

  const addVocabulary = useVocabularyStore((state) => state.addVocabulary);

  const handleWordClick = (wordInfo) => {
    const _translation = song.translations.find(item => item.en === wordInfo);
    if (_translation) {
      setSelectedWordInfo(_translation);
      setVisible(true);
    }
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedWordInfo({ en: "", tr: "", id: -1 });
  };


  const groupWord = (value) => {
    const list = [];
    let words = [];
    value.split(' ').forEach(word => {
      const regex = /^[A-Z]/;

      if (regex.test(word)) {
        if (words.length === 1 && word === 'I') {
          words.push(word);
        } else {
          words.length > 0 && list.push(words);
          words = [word];
        }
      } else {
        words.push(word);
      }

    })
    setWordList(list);
  }

  const control = (word) => {
    return song.translations.some(item => item.en === word);
  }

  useEffect(() => { groupWord(song.lyrics) }, [song.lyrics])

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.backStyle}>
              <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
                <Back />
              </TouchableOpacity>
            </View>
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
              <View>
                {wordList.map((item, index) =>
                  <View key={index} style={styles.wordContainer}>
                    {item.map((wordMap, indexKey) =>
                      <Text key={indexKey}
                        style={control(wordMap) ? styles.clickableWord : styles.lyrics}
                        onPress={() => handleWordClick(wordMap)}
                      >{wordMap} </Text>
                    )}
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
        <CustomModal
          visible={visible}
          onClose={closeModal}
          word={selectedWordInfo}
          save={() => addVocabulary(selectedWordInfo)}
        />
      </SafeAreaView>
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

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 30,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    width: windowWidth - 32,
    backgroundColor: '#ffffff99',
    margin: 8,
    borderRadius: 10,
    marginTop: -20,
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
    width: 100,
    height: 100,
  },
  artist: {
    color: '#e79ec0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songTitle: {
    color: '#e79ec0',
    fontSize: 16,
    marginBottom: 10,
  },
  lyrics: {
    color: '#E5B2CA',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.3,
    padding: 3,

  },
  clickableWord: {
    color: '#e79ec0',
    fontWeight: 'bold',
    padding: 3,
    fontSize: 18,
    letterSpacing: 0.5,

  },
  wordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  androidSafeArea: {
    flex: 1,
  },
});
