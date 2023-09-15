import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;

const CustomTextInput = ({ icon, placeholder, onChangeText, value, secureText, isLowerCase, widthStyle, heightStyle }) => {
  const [text, setText] = useState(value);

  const handleTextInput = (inputText) => {
    // Girilen metindeki boşlukları kaldırın
    const sanitizedText = inputText.replace(/\s/g, '');
    setText(sanitizedText);
    onChangeText(sanitizedText);

    // isLowerCase prop'u true ise, girilen metni küçük harfe çevir
    const finalText = isLowerCase ? inputText.toLowerCase() : inputText;
    setText(finalText);
    onChangeText(finalText);
  };

  return (
    <View style={[styles.textinput, { width: widthStyle, height: heightStyle }]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <TextInput value={text} onChangeText={handleTextInput} style={styles.inputTextName} placeholder={placeholder} secureTextEntry={secureText} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textinput: {
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: windowWidth - 56,
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 0.6,
    height: 80,
    marginBottom: 10,
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
