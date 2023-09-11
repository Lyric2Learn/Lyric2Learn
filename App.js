import { StyleSheet } from 'react-native';
import NavigationScreen from './NavigationPage/NavigationScreen';
import useVocabularyStore from './Store/useStore';
import React, { useEffect } from 'react'

export default function App() {
  const initializeVocabularyStore = useVocabularyStore((state) => state.initialize);

  useEffect(() => {
    initializeVocabularyStore();
  }, []);

  return <NavigationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
