import { TouchableOpacity } from 'react-native';
import { create } from 'zustand'

const useVocabularyStore = create((set) => ({
  vocabulary: [],
  addVocabulary: (word) => set((state) => ({
    vocabulary: [...state.vocabulary, word,],
  })),
  removeVocabulary: (key) => set((state) => {
    const cloned = [...state.vocabulary];
    const index = cloned.findIndex((item) => item.key === key);
    if (index !== -1) {
      cloned.splice(index, 1);
      return { vocabulary: [...cloned] };
    }
    return state;
  }),
  toggleSaved: (key) =>
    set((state) => ({
      vocabulary: state.vocabulary.map((item) =>
        item.key === key ? { ...item, isSaved: !item.isSaved } : item
      ),
    })),
}))


export default useVocabularyStore