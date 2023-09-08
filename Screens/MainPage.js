import { StyleSheet, Image, View, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Search from '../Images/Svg/search';
import CustomSearchInput from '../Components/CustomSearchInput';
import music_data from '../musicdata.json';
import CustomSearchSong from '../Components/CustomSearchSong';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// AnaSayfa UI Kodları
const MainPage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isVisible, setVisible] = useState(true);

  const handleSearch = (text) => {
    setSearchText(text);
    const isTextEmpty = text === '' || text === undefined;
    setVisible(isTextEmpty || filteredList.length === 0 || !text);
  };

  const filteredList = music_data.filter((song) => {
    const searchedText = searchText.toLowerCase();
    const currentTitle = song.artist.toLowerCase();
    const currentSongTitle = song.songTitle.toLowerCase();

    return currentTitle.includes(searchedText) || currentSongTitle.includes(searchedText);
  });

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          {/* Lyric2Learn adlı Logo  */}
          <View style={styles.logoContainer}>
            <Image source={require('../Images/Lyric2LearnLogo.png')} />
          </View>
          {/* Search Alanı */}
          <View style={styles.inputContainer}>
            <CustomSearchInput icon={<Search />} value={searchText} onChangeText={handleSearch} placeholder={'Şarkınızı Arayın...'} />
          </View>
          {/* Şarkı araması yapılmadan önce gözükecek resim */}
          <View style={styles.backgroundView}>
            {isVisible ? (
              <Image source={require('../Images/SearchBefore.png')} style={styles.backgroundImage} />
            ) : (
              <FlatList
                scrollEnabled={false}
                data={filteredList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('SongLyric', { song: item })}>
                    <CustomSearchSong song={item} />
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default MainPage;

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
  },
  inputContainer: {
    flexShrink: 0,
    flexBasis: '10%',
  },
  backgroundView: {
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    height: windowHeight / 1.6,
    width: windowWidth / 1.1,
    margin: 8,
    borderRadius: 10,
  },
  backgroundImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    flexBasis: '80%',
  },
  songCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
