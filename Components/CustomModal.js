import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Unsave from '../Images/Svg/unsave';
import Save from '../Images/Svg/save';
import useVocabularyStore from '../Store/useStore';

const CustomHalfModal = ({ visible, onClose, translation, word, save, selectedWordInfo }) => {
  const vocabulary = useVocabularyStore((state) => state.vocabulary);

  const toggleSave = () => {
    save()
    console.log(vocabulary);
  };


  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.saveContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.selectedWord}>{word}</Text>
              <Text style={styles.translationText}>{translation}</Text>
            </View>
            <TouchableOpacity onPress={toggleSave}>{vocabulary.some(item => item.id === selectedWordInfo.id) ? <Save /> : <Unsave />}</TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '7%',
    width: '100%',
    minHeight: '30%',
    justifyContent: 'flex-start',
  },
  translationText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E5B2CA',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  },
  selectedWord: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textContainer: {
    margin: '5%',
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomHalfModal;
