import React, { useState } from 'react';
import type { ListRenderItem, ViewStyle } from 'react-native';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../theme/colors';
import type { CaseStudy, ContributedProject } from '../types/portfolio';

type ExampleListProps = {
  items: ContributedProject[];
  ListFooterComponent?: React.ComponentType | React.ReactElement | null;
  onCaseStudyPress?: (caseStudy: CaseStudy) => void;
  onItemPress?: (item: ContributedProject) => void;
  style?: ViewStyle;
};

const ExampleList = ({
  items,
  ListFooterComponent,
  onCaseStudyPress,
  onItemPress,
  style,
}: ExampleListProps) => {
  const [expandedItemIds, setExpandedItemIds] = useState<string[]>(() =>
    // items.filter(item => item.children?.length).map(item => item.id),
    [],
  );

  const toggleItem = (itemId: string) => {
    setExpandedItemIds(currentItemIds =>
      currentItemIds.includes(itemId)
        ? currentItemIds.filter(currentItemId => currentItemId !== itemId)
        : [...currentItemIds, itemId],
    );
  };

  const renderItem: ListRenderItem<ContributedProject> = ({ item }) => {
    const hasChildren = Boolean(item.children?.length);
    const isExpanded = expandedItemIds.includes(item.id);
    const handlePress = (selectedItem: ContributedProject) => {
      if (selectedItem.caseStudy) {
        onCaseStudyPress?.(selectedItem.caseStudy);
        return;
      }

      onItemPress?.(selectedItem);
    };

    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={hasChildren ? { expanded: isExpanded } : undefined}
        onPress={() => (hasChildren ? toggleItem(item.id) : handlePress(item))}
        style={styles.item}
      >
        <View style={styles.itemHeader}>
          <Text style={styles.title}>{item.title}</Text>
          {hasChildren ? (
            <Text style={styles.accordionIndicator}>
              {isExpanded ? 'Close' : 'Open'}
            </Text>
          ) : null}
        </View>
        <Text style={styles.description}>{item.description}</Text>
        {hasChildren && isExpanded ? (
          <View style={styles.childList}>
            {item.children?.map(child => (
              <Pressable
                accessibilityRole={
                  onItemPress || onCaseStudyPress ? 'button' : undefined
                }
                key={child.id}
                onPress={() => handlePress(child)}
                style={styles.childItem}
              >
                {child.thumbnailUrl ? (
                  <Image
                    source={{ uri: child.thumbnailUrl }}
                    style={styles.childThumbnail}
                  />
                ) : null}
                <View style={styles.childContent}>
                  <Text style={styles.childTitle}>{child.title}</Text>
                  <Text numberOfLines={3} style={styles.childDescription}>
                    {child.description}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : null}
      </Pressable>
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={[styles.content, style]}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={EmptyList}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const EmptyList = () => (
  <View style={styles.emptyState}>
    <Text style={styles.emptyText}>No items yet.</Text>
  </View>
);

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  item: {
    borderRadius: 6,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  accordionIndicator: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  childList: {
    marginTop: 14,
    gap: 10,
  },
  childItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: colors.surfaceTint,
    padding: 12,
  },
  childThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.surfaceStrong,
  },
  childContent: {
    flex: 1,
  },
  childTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  childDescription: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  childUrl: {
    marginTop: 6,
    color: colors.primary,
    fontSize: 12,
  },
  separator: {
    height: 12,
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 16,
  },
});

export default ExampleList;
