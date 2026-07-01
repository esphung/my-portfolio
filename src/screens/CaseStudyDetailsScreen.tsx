import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import ImagePreviewModal from '../components/ImagePreviewModal';
import { colors } from '../theme/colors';
import type {
  CaseStudy,
  CaseStudyImage,
  CaseStudySectionId,
} from '../types/portfolio';

type CaseStudyDetailsScreenProps = {
  caseStudy: CaseStudy;
  onBackPress: () => void;
};

type DetailSectionProps = {
  title: string;
  body?: string;
  images?: CaseStudyImage[];
  items?: string[];
  onImagePress: (image: CaseStudyImage) => void;
};

const DetailSection = ({
  title,
  body,
  images,
  items,
  onImagePress,
}: DetailSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {body ? <Text style={styles.body}>{body}</Text> : null}
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
    {images?.length ? (
      <View style={styles.imageList}>
        {images.map(image => (
          <Pressable
            accessibilityLabel={
              image.caption
                ? `Preview image: ${image.caption}`
                : 'Preview case study image'
            }
            accessibilityRole="imagebutton"
            key={image.id}
            onPress={() => onImagePress(image)}
            style={styles.imageFrame}
          >
            <Image
              source={{ uri: image.imageUrl }}
              style={[
                styles.image,
                { aspectRatio: image.aspectRatio ?? 4 / 3 },
              ]}
              resizeMode="contain"
            />
            {image.caption ? (
              <Text style={styles.imageCaption}>{image.caption}</Text>
            ) : null}
          </Pressable>
        ))}
      </View>
    ) : null}
  </View>
);

const CaseStudyDetailsScreen = ({
  caseStudy,
  onBackPress,
}: CaseStudyDetailsScreenProps) => {
  const [previewImage, setPreviewImage] = React.useState<CaseStudyImage | null>(
    null,
  );

  const getImagesForSection = (sectionId: CaseStudySectionId) =>
    caseStudy.images?.filter(image => image.sectionId === sectionId);

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          onPress={onBackPress}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        <Text numberOfLines={1} style={styles.headerTitle}>
          {caseStudy.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Case Study</Text>
        <Text style={styles.title}>{caseStudy.title}</Text>
        <DetailSection
          title="Problem"
          body={caseStudy.problem}
          images={getImagesForSection('problem')}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="Solution"
          body={caseStudy.solution}
          images={getImagesForSection('solution')}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="How I Built It"
          images={getImagesForSection('howIBuiltIt')}
          items={caseStudy.howIBuiltIt}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="What I Made"
          images={getImagesForSection('whatIMade')}
          items={caseStudy.whatIMade}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="Challenges"
          images={getImagesForSection('challenges')}
          items={caseStudy.challenges}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="Outcome"
          body={caseStudy.outcome}
          images={getImagesForSection('outcome')}
          onImagePress={setPreviewImage}
        />
        <DetailSection
          title="Stack"
          images={getImagesForSection('stack')}
          items={caseStudy.stack}
          onImagePress={setPreviewImage}
        />
      </ScrollView>

      <ImagePreviewModal
        caption={previewImage?.caption}
        imageUrl={previewImage?.imageUrl}
        onClose={() => setPreviewImage(null)}
        visible={Boolean(previewImage)}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    backgroundColor: colors.background,
  },
  backButton: {
    borderRadius: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backButtonText: {
    color: colors.textOnDark,
    fontSize: 15,
    fontWeight: '700',
  },
  headerTitle: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  eyebrow: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 8,
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
  },
  section: {
    marginTop: 24,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    paddingTop: 16,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    marginTop: 10,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  imageList: {
    gap: 12,
    marginTop: 14,
  },
  imageFrame: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  imageCaption: {
    marginTop: 8,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
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
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default CaseStudyDetailsScreen;
