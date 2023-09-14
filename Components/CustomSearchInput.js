import { StyleSheet, Dimensions, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSearchInput = ({ icon, value, onChangeText, placeholder }) => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.textinput}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput value={value} onChangeText={onChangeText} style={styles.inputTextName} placeholder={placeholder} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CustomSearchInput;

const styles = StyleSheet.create({
  textinput: {
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: windowWidth - 56,
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 0.6,
    height: 80,
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
