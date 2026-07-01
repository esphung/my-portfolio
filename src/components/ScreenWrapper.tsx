import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PKG_JSON from '../../package.json';
import { colors } from '../theme/colors';
import SafeAreaInsetsView from './SafeAreaInsetsView';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => (
  <SafeAreaInsetsView style={styles.container}>
    <View style={styles.content}>{children}</View>
    <View style={styles.footerPanel}>
      <Text style={styles.version}>
        Version {PKG_JSON.version} ({PKG_JSON.versionCode})
      </Text>
    </View>
  </SafeAreaInsetsView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  footerPanel: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  version: {
    paddingTop: 24,
    color: colors.text,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ScreenWrapper;
