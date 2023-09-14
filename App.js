import { StyleSheet } from 'react-native';
import NavigationScreen from './NavigationPage/NavigationScreen';
import useVocabularyStore from './Store/useStore';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const initializeVocabularyStore = useVocabularyStore((state) => state.initialize);

  useEffect(() => {
    initializeVocabularyStore();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
