import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomButton = ({ buttonName, buttonColor, titleColor, buttonShadow, onPress }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: buttonColor }, buttonShadow]} onPress={onPress}>
      <Text style={[styles.buttonTitle, { color: titleColor }]}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    padding: 10,
    height: 80,
    width: windowWidth - 80,
    borderRadius: 50,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
