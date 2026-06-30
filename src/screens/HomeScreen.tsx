import React from 'react';
import { Alert, Linking, Platform, StyleSheet, Text } from 'react-native';

import ExampleList, { ExampleListItem } from '../components/ExampleList';
import { portfolioSections } from '../data/portfolioSections';
import SafeAreaInsetsView from '../components/SafeAreaInsetsView';

const getNativeAppStoreUrl = (appStoreUrl: string) => {
  if (!appStoreUrl.startsWith('https://apps.apple.com')) {
    return appStoreUrl;
  }

  return appStoreUrl.replace('https://', 'itms-apps://');
};

const getNativePlayStoreUrl = (playStoreUrl: string) => {
  if (playStoreUrl.startsWith('https://play.google.com/store/search')) {
    return playStoreUrl.replace(
      'https://play.google.com/store/search?',
      'market://search?',
    );
  }

  if (playStoreUrl.startsWith('https://play.google.com/store/apps/details')) {
    return playStoreUrl.replace(
      'https://play.google.com/store/apps/',
      'market://',
    );
  }

  return playStoreUrl;
};

const HomeScreen = () => {
  const handleItemPress = async (item: ExampleListItem) => {
    if (Platform.OS === 'ios' && item.appStoreUrl) {
      const nativeAppStoreUrl = getNativeAppStoreUrl(item.appStoreUrl);

      try {
        await Linking.openURL(nativeAppStoreUrl);
      } catch {
        try {
          await Linking.openURL(item.appStoreUrl);
        } catch {
          Alert.alert(item.title, `Unable to open link:\n\n${item.appStoreUrl}`);
        }
      }

      return;
    }

    if (Platform.OS === 'android' && item.playStoreUrl) {
      const nativePlayStoreUrl = getNativePlayStoreUrl(item.playStoreUrl);

      try {
        await Linking.openURL(nativePlayStoreUrl);
      } catch {
        try {
          await Linking.openURL(item.playStoreUrl);
        } catch {
          Alert.alert(
            item.title,
            `Unable to open link:\n\n${item.playStoreUrl}`,
          );
        }
      }

      return;
    }

    Alert.alert(item.title, item.description);
  };

  return (
    <SafeAreaInsetsView style={styles.container}>
      <Text style={styles.heading}>My Portfolio</Text>
      <ExampleList
        items={portfolioSections}
        onItemPress={handleItemPress}
        style={styles.list}
      />
    </SafeAreaInsetsView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 24,
    color: '#111827',
    fontSize: 28,
    fontWeight: '800',
  },
  list: {
    paddingTop: 20,
  },
});

export default HomeScreen;
