import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useVocabularyStore = create(
  persist(
    (set, get) => ({
      vocabulary: [], // Başlangıçta boş bir dizi olarak tanımlayın
      addVocabulary: (word) =>
        set((state) => ({
          vocabulary: state.vocabulary.some((item) => item.id === word.id)
            ? state.vocabulary.filter((item) => item.id !== word.id)
            : [...state.vocabulary, word],
        })),
      deleteVocabulary: (wordId) => {
        set((state) => ({
          vocabulary: state.vocabulary.filter((item) => item.id !== wordId),
        }));
      },
    }),
    {
      name: 'handleVocabulary',
      storage: createJSONStorage(() => AsyncStorage),

    }
  )
);

export default useVocabularyStore;


