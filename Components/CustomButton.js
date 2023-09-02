import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { hp, wp } from './DimensionPixel';

const CustomButton = ({
  buttonName,
  buttonColor,
  titleColor,
  buttonShadow,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonColor },
        buttonShadow,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonTitle, { color: titleColor }]}>
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: wp('80%'),
    height: hp('8%'),
    borderRadius: wp('30%'),
    marginLeft: wp('10%'),
    marginRight: hp('-10%'),
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
