import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomText = ({ header, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: -40,
  },
  header: {
    color: '#FFFFFFBF',
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 34,
    fontWeight: '800',
    fontStyle: 'normal',
  },
});
