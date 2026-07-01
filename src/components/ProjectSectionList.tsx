import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { ProjectDetailsSection } from './ExampleList';
import { colors } from '../theme/colors';

type ProjectSectionListProps = {
  sections?: ProjectDetailsSection[];
};

const getUniqueTechnologyItems = (section: ProjectDetailsSection) => {
  if (section.title !== 'Technologies Used') {
    return section.items;
  }

  const seenItems = new Set<string>();

  return section.items?.filter(item => {
    const normalizedItem = item.trim().toLowerCase();

    if (seenItems.has(normalizedItem)) {
      return false;
    }

    seenItems.add(normalizedItem);
    return true;
  });
};

const ProjectSectionList = ({ sections = [] }: ProjectSectionListProps) => {
  const [expandedSectionIds, setExpandedSectionIds] = React.useState<string[]>(
    () => (sections[0]?.id ? [sections[0].id] : []),
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSectionIds(currentSectionIds =>
      currentSectionIds.includes(sectionId)
        ? currentSectionIds.filter(currentSectionId => currentSectionId !== sectionId)
        : [...currentSectionIds, sectionId],
    );
  };

  if (!sections.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {sections.map(section => {
        const isExpanded = expandedSectionIds.includes(section.id);
        const items = getUniqueTechnologyItems(section);

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: isExpanded }}
            key={section.id}
            onPress={() => toggleSection(section.id)}
            style={styles.section}>
            <View style={styles.header}>
              <Text style={styles.title}>{section.title}</Text>
              <Text style={styles.accordionIndicator}>
                {isExpanded ? 'Close' : 'Open'}
              </Text>
            </View>

            {isExpanded ? (
              <View style={styles.sectionContent}>
                {section.imageUrl ? (
                  <Image source={{ uri: section.imageUrl }} style={styles.image} />
                ) : null}
                {section.description ? (
                  <Text style={styles.description}>{section.description}</Text>
                ) : null}
                {items?.length ? (
                  <View style={styles.itemList}>
                    {items.map(item => (
                      <View key={item} style={styles.itemRow}>
                        <View style={styles.bullet} />
                        <Text style={styles.itemText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                ) : null}
              </View>
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
    marginTop: 28,
  },
  section: {
    borderRadius: 8,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  accordionIndicator: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  sectionContent: {
    marginTop: 14,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    backgroundColor: colors.surfaceStrong,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  description: {
    marginTop: 12,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  itemList: {
    gap: 10,
    marginTop: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
    marginTop: 7,
  },
  itemText: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default ProjectSectionList;
