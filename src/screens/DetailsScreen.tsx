import React from 'react';
import {
  Alert,
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ExampleListItem } from '../components/ExampleList';
import ProjectSectionList from '../components/ProjectSectionList';
import SafeAreaInsetsView from '../components/SafeAreaInsetsView';
import { colors } from '../theme/colors';

type DetailsScreenProps = {
  project: ExampleListItem;
  onBackPress: () => void;
};

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

const openUrl = async (title: string, url: string, nativeUrl = url) => {
  if (!url) {
    return;
  }

  try {
    await Linking.openURL(nativeUrl);
  } catch {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(title, `Unable to open link:\n\n${url}`);
    }
  }
};

const DetailsScreen = ({ project, onBackPress }: DetailsScreenProps) => {
  const appStoreUrl = project.appStoreUrl;
  const playStoreUrl = project.playStoreUrl;
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    React.useState(false);

  const handleAppStorePress = () => {
    if (appStoreUrl) {
      openUrl(project.title, appStoreUrl, getNativeAppStoreUrl(appStoreUrl));
    }
  };

  const handlePlayStorePress = () => {
    if (playStoreUrl) {
      openUrl(project.title, playStoreUrl, getNativePlayStoreUrl(playStoreUrl));
    }
  };

  return (
    <SafeAreaInsetsView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          onPress={onBackPress}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        <Text numberOfLines={1} style={styles.headerTitle}>
          {project.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {project.thumbnailUrl ? (
          <Image source={{ uri: project.thumbnailUrl }} style={styles.image} />
        ) : null}
        <Text style={styles.title}>{project.title}</Text>
        <Pressable
          accessibilityRole={isDescriptionExpanded ? 'button' : undefined}
          disabled={!isDescriptionExpanded}
          onPress={() => setIsDescriptionExpanded(false)}>
          <Text
            numberOfLines={isDescriptionExpanded ? undefined : 5}
            style={styles.description}>
            {project.description}
          </Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() =>
            setIsDescriptionExpanded(currentValue => !currentValue)
          }
          style={styles.descriptionToggle}>
          <Text style={styles.descriptionToggleText}>
            {isDescriptionExpanded ? 'Show less' : '...more'}
          </Text>
        </Pressable>
        <ProjectSectionList sections={project.detailsSections} />

        <View style={styles.actions}>
          {appStoreUrl ? (
            <Pressable
              accessibilityRole="link"
              onPress={handleAppStorePress}
              style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>App Store</Text>
            </Pressable>
          ) : null}
          {Platform.OS !== 'ios' && playStoreUrl ? (
            <Pressable
              accessibilityRole="link"
              onPress={handlePlayStorePress}
              style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Google Play</Text>
            </Pressable>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaInsetsView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.primaryDeep,
  },
  backButton: {
    borderRadius: 8,
    backgroundColor: colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backButtonText: {
    color: colors.primaryDeep,
    fontSize: 15,
    fontWeight: '700',
  },
  headerTitle: {
    flex: 1,
    color: colors.textOnDark,
    fontSize: 18,
    fontWeight: '800',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 18,
    backgroundColor: colors.surfaceStrong,
  },
  title: {
    marginTop: 18,
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
  },
  description: {
    marginTop: 12,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  descriptionToggle: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  descriptionToggleText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 24,
  },
  primaryButton: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: colors.primaryDeep,
    fontSize: 15,
    fontWeight: '800',
  },
  secondaryButton: {
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },
});

export default DetailsScreen;
