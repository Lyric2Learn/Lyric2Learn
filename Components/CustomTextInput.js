import { StyleSheet, TextInput, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomTextInput = ({icon,value, onChangeText,placeholder, secureText,}) => {
  
    return (
        <View style={styles.textinput}>
             {icon && 
             <View style={styles.iconContainer}>{icon}</View>}
             <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.inputTextName}
                placeholder={placeholder}
                secureTextEntry={secureText}
            /> 
        </View>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    textinput: {
      alignContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#FFF',
      borderRadius: 50,
      height: windowHeight / 11,
      width: windowWidth / 1.1,
      padding: 20,
      borderColor: '#ccc',
      borderWidth: 0.6,
    },
    inputTextName: {
      flex: 1,
      color: '#3C3C43',
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: '400',
      
    },
    iconContainer: {
      alignSelf: 'center',
      padding: 10,
    },
  });
