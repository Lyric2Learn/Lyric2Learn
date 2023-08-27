import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { wp, hp } from '../Components/DimensionPixel'

const CustomTextInput = ({icon,value, onChangeText,placeholder}) => {
  
    return (
        <View style={styles.textinput}>
             {icon && 
             <View style={styles.iconContainer}>{icon}</View>}
             <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.inputTextName}
                placeholder={placeholder}
            /> 
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textinput: {
      backgroundColor: '#FFF',
      borderRadius: wp('50%'),
      height: hp('8%'),
      width: wp('85%'),
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#ccc',
      marginHorizontal: ('8%'),
      borderWidth: 0.5,
      marginBottom: hp('3%')

    },
    inputTextName: {
      color: '#3C3C43',
      marginLeft: wp('4%'), 
      fontSize: wp('3.5%'), 
      fontWeight: '400',
      flex: 1,
    },
    iconContainer: {
      marginLeft: wp('5%'), 
    },
  });