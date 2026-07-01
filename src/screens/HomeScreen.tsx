import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ExampleList, { ExampleListItem } from '../components/ExampleList';
import { portfolioSections } from '../data/portfolioSections';
import SafeAreaInsetsView from '../components/SafeAreaInsetsView';
import { colors } from '../theme/colors';
import PKG_JSON from '../../package.json';

type HomeScreenProps = {
  onProjectPress: (project: ExampleListItem) => void;
};

const HomeScreen = ({ onProjectPress }: HomeScreenProps) => {
  return (
    <SafeAreaInsetsView style={styles.container}>
      <Text style={styles.heading}>My Portfolio</Text>
      <ExampleList
        items={portfolioSections}
        onItemPress={onProjectPress}
        style={styles.list}
      />
      <Text style={styles.version}>Version {PKG_JSON.version}</Text>
    </SafeAreaInsetsView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 14,
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
  },
  list: {
    paddingTop: 20,
  },
  version: {
    paddingHorizontal: 20,
    paddingTop: 10,
    color: colors.text,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;
