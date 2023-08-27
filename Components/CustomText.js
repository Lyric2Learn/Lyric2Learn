import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp, hp } from './DimensionPixel';

const CustomText = ({header, title}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.title}>{title}</Text>
   </View>
 );
}

export default CustomText

const styles = StyleSheet.create({
    container:{
        marginTop: hp('-8%')
    },
    header:{
        color: '#FFFFFFBF',
        textAlign: 'center',
        fontSize: 22,
        fontStyle:'normal',
        fontWeight: '600',
        
    },
    title:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 34,
        fontWeight: '800',
        fontStyle:'normal',
        
    }
})