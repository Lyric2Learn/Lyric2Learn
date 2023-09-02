import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSearchSong = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageURL }} style={styles.songImage} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyleArtist}>{song.artist}</Text>
        <Text style={styles.textStyleTitle}>{song.songTitle}</Text>
      </View>
    </View>
  )
}

export default CustomSearchSong

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10,
    width: windowWidth / 1.2,
    height: windowHeight / 10,
    alignSelf: 'center',
    padding: 10,

  },
  songImage: {
    width: windowWidth / 6,
    height: windowHeight / 14,
    borderRadius: 10,

  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  
  },
  textStyleArtist: {
    color: '#E5B2CA',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.70,
    marginBottom: 5,
  },
  textStyleTitle: {
    color: '#E5B2CA',
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 0.70,
  }
})