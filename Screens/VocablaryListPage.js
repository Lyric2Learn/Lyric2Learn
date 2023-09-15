import { StyleSheet, View, Image, Dimensions, } from 'react-native';
import React, { useRef, } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import useVocabularyStore from '../Store/useStore';
import CustomVocablary from '../Components/CustomVocablary';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const windowWidth = Dimensions.get('window').width;

const VocablaryListPage = () => {
  const vocabulary = useVocabularyStore((state) => state.vocabulary);
  console.log(vocabulary);
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
              <ScrollView ref={scrollRef}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  backgroundView: {
    flex: 1,
    backgroundColor: '#ffffff99',
    width: windowWidth - 32,
    margin: 16,
    borderRadius: 10,
    marginTop: -20,
  },
  androidSafeArea: {
    flex: 1,
  },
});