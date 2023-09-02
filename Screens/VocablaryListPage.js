import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Data from '../Data.json';

const VocablaryListPage = () => {
  const lyrics = Data.lyrics;

  return (
    <View style={styles.container}>
      {lyrics.split(' ').map((lyric) => {
        const cleanedLyric = lyric.replace(/[,.!?]/g, '');
        return <Text>{cleanedLyric}</Text>;
      })}
    </View>
  );
};

export default VocablaryListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
