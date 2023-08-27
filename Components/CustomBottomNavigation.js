import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import tabs from '../Constants/BottomNavigation/Tabs';

const Tab = createBottomTabNavigator();

const CustomBottomNavigation = ({navigation, state, descriptions}) => {
  return (
    <View style={styles.container}>
        {tabs.map((tab, index) => {
            const { options } = descriptions[tab.screen];
            const isFocused = state.index === index;
        
        return (
          <TouchableOpacity
            key={tab.screen}
            onPress={() => navigation.navigate(tab.screen)}
            style={[styles.tab, { backgroundColor: isFocused ? '#f5f5f5' : 'transparent' }]}
          >
            <Icon name={tab.iconName} size={24} color={isFocused ? 'black' : '#888'} />
            <Text style={[styles.tabLabel, { color: isFocused ? 'black' : '#888' }]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default CustomBottomNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ccc',
      },
      tab: {
        padding: 10,
        borderRadius: 25,
      },
      tabLabel: {
        fontSize: 14,
        fontWeight: 'bold',
      },
})