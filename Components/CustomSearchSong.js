import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const CustomSearchSong = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageURL }} style={styles.songImage} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyleArtist}>{song.artist}</Text>
        <Text style={styles.textStyleTitle}>{song.songTitle}</Text>
      </View>
    </View>
  );
};

export default CustomSearchSong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10,
    width: windowWidth - 50,
    alignSelf: 'center',
    padding: 15,
  },
  songImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textStyleArtist: {
    color: '#e79ec0',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.7,
    marginBottom: 5,
  },
  textStyleTitle: {
    color: '#e79ec0',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.7,
  },
});
