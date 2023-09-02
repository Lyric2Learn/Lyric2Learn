import { TouchableOpacity } from 'react-native';
import { create } from 'zustand'

const useVocabularyStore = create((set) => ({
  vocabulary: [],
  addVocabulary: (word) => set((state) => ({
    vocabulary: [...state.vocabulary, word,],
  })),
}))


export default useVocabularyStore