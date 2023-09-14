import { StyleSheet, Image, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Search from '../Images/Svg/search';
import CustomSearchInput from '../Components/CustomSearchInput';
import CustomSearchSong from '../Components/CustomSearchSong';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../authentication/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainPage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isVisible, setVisible] = useState(true);
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    // Firestore'dan verileri çekmek için bir etkileşimli işlev kullanıyoruz
    const fetchCollectionData = async () => {
      const collectionRef = collection(db, 'songs');
      const querySnapshot = await getDocs(collectionRef);

      const data = []; // Firestore verilerini saklamak için boş bir dizi tanımlıyoruz
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // Her belgeyi diziye ekliyoruz
      });

      setMusicData(data); // Firestore verilerini state'e atıyoruz
    };

    fetchCollectionData(); // Firestore verilerini çekmek için işlevi çağırıyoruz
  }, []); // [] içine bir bağımlılık dizisi ekledik, böylece bu yalnızca bir kere çalışır

  const handleSearch = (text) => {
    setSearchText(text);
    const isTextEmpty = text === '' || text === undefined;
    setVisible(isTextEmpty || filteredList.length === 0 || !text);
  };

  const filteredList = musicData.filter((song) => {
    const searchedText = searchText.toLowerCase();
    const currentTitle = song.artist.toLowerCase();
    const currentSongTitle = song.songTitle.toLowerCase();

    return currentTitle.includes(searchedText) || currentSongTitle.includes(searchedText);
  });

  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <SafeAreaView style={styles.androidSafeArea}>
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
          {isVisible ? (
            <View style={styles.backgroundView}>
              <Image source={require('../Images/SearchBefore.png')} style={styles.backgroundImage} />
            </View>
          ) : (
            <>
              <FlatList
                style={styles.flatlist}
                scrollEnabled={true}
                data={filteredList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('SongLyric', { song: item })}>
                    <CustomSearchSong song={item} />
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </View>
      </SafeAreaView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: -30,
    marginTop: 10,
  },
  inputContainer: {
    height: 100,
  },
  backgroundView: {
    backgroundColor: '#ffffff99',
    width: width - 32,
    margin: 16,
    borderRadius: 10,
    flex: 1,
    height: 100,
    alignItems: 'center',
  },
  flatlist: {
    backgroundColor: '#ffffff99',
    width: width - 32,
    margin: 16,
    borderRadius: 10,
    flex: 1,
    height: 100,
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: width - 16,
  },
  songCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  androidSafeArea: {
    flex: 1,
  },
});
