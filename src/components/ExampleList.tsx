import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export type ExampleListItem = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  children?: ExampleListItem[];
};

type ExampleListProps = {
  items: ExampleListItem[];
  onItemPress?: (item: ExampleListItem) => void;
  style?: ViewStyle;
};

const ExampleList = ({ items, onItemPress, style }: ExampleListProps) => {
  const [expandedItemIds, setExpandedItemIds] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setExpandedItemIds(currentItemIds =>
      currentItemIds.includes(itemId)
        ? currentItemIds.filter(currentItemId => currentItemId !== itemId)
        : [...currentItemIds, itemId],
    );
  };

  const renderItem: ListRenderItem<ExampleListItem> = ({ item }) => {
    const hasChildren = Boolean(item.children?.length);
    const isExpanded = expandedItemIds.includes(item.id);

    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={hasChildren ? { expanded: isExpanded } : undefined}
        onPress={() => (hasChildren ? toggleItem(item.id) : onItemPress?.(item))}
        style={styles.item}>
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
              accessibilityRole={onItemPress ? 'button' : undefined}
              key={child.id}
              onPress={() => onItemPress?.(child)}
              style={styles.childItem}>
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
    borderRadius: 8,
    backgroundColor: '#ffffff',
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
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
  },
  accordionIndicator: {
    color: '#2563eb',
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    color: '#4b5563',
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
    borderLeftColor: '#2563eb',
    borderLeftWidth: 3,
    backgroundColor: '#eff6ff',
    padding: 12,
  },
  childThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#dbeafe',
  },
  childContent: {
    flex: 1,
  },
  childTitle: {
    color: '#1e3a8a',
    fontSize: 16,
    fontWeight: '700',
  },
  childDescription: {
    marginTop: 4,
    color: '#1f2937',
    fontSize: 13,
    lineHeight: 18,
  },
  childUrl: {
    marginTop: 6,
    color: '#2563eb',
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
    color: '#4b5563',
    fontSize: 16,
  },
});

export default ExampleList;
