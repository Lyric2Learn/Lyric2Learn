import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useVocabularyStore = create(
  persist(
    (set, get) => ({
      vocabulary: [],
      addVocabulary: (word) =>
        set((state) => ({
          vocabulary: state.vocabulary.some(item => item.id === word.id) ? state.vocabulary.filter(item => item.id !== word.id) : [...state.vocabulary, word],
        })),
      deleteVocabulary: (wordId) => {
        set((state) => ({
          vocabulary: state.vocabulary.filter(item => item.id !== wordId)
        }));
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
