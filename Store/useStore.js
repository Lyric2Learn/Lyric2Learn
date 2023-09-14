import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useVocabularyStore = create(
  persist(
    (set) => ({
      vocabulary: [],
      addVocabulary: (word) =>
        set((state) => ({
          vocabulary: state.vocabulary.some(item => item.id === word.id) ? state.vocabulary.filter(item => item.id !== word.id) : [...state.vocabulary, word],
        })),
      deleteVocabulary: async (wordId) => {
        // Kelimeyi kaldırın ve AsyncStorage'den kaldırın
        try {
          const currentVocabulary = useVocabularyStore.getState().vocabulary;
          const updatedVocabulary = currentVocabulary.filter((item) => item.id !== wordId);
          useVocabularyStore.setState({ vocabulary: updatedVocabulary });

          await AsyncStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
        } catch (error) {
          console.error('Kelime silme hatası:', error);
        }
      },
      initialize: async () => {
        try {
          const savedData = await AsyncStorage.getItem('handleVocabulary');
          if (savedData) {
            set(JSON.parse(savedData));
          }
        } catch (error) {
          console.error('Veri geri yükleme hatası:', error);
        }
      },
    }),
    {
      name: 'handleVocabulary',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrate: (state) => ({ ...state }),
    },
  )
);

export default useVocabularyStore;

