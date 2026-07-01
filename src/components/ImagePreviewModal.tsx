import React from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type ImagePreviewModalProps = {
  imageUrl?: string;
  caption?: string;
  visible: boolean;
  onClose: () => void;
};

const ImagePreviewModal = ({
  imageUrl,
  caption,
  visible,
  onClose,
}: ImagePreviewModalProps) => (
  <Modal animationType="fade" transparent visible={visible}>
    <View style={styles.backdrop}>
      <Pressable
        accessibilityLabel="Close image preview"
        accessibilityRole="button"
        onPress={onClose}
        style={styles.closeButton}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>

      {imageUrl ? (
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      ) : null}

      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 48,
    right: 20,
    zIndex: 1,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  image: {
    width: '100%',
    height: '78%',
  },
  caption: {
    marginTop: 16,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default ImagePreviewModal;
