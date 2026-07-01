import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ExampleList from '../components/ExampleList';
import ScreenWrapper from '../components/ScreenWrapper';
import { caseStudies } from '../data/caseStudies';
import { contributedProjects } from '../data/contributedProjectsSections';
import { colors } from '../theme/colors';
import type { CaseStudy, ContributedProject } from '../types/portfolio';

type HomeScreenProps = {
  onCaseStudyPress: (caseStudy: CaseStudy) => void;
  onProjectPress: (project: ContributedProject) => void;
};

const mapContributedProject = (project: ContributedProject) => ({
  id: project.id,
  title: project.title,
  description: project.description,
  thumbnailUrl: project.thumbnailUrl,
  appStoreUrl: project.appStoreUrl,
  playStoreUrl: project.playStoreUrl,
  detailsSections: project.detailsSections,
});

const mapCaseStudy = (caseStudy: CaseStudy) => ({
  id: caseStudy.id,
  title: caseStudy.title,
  description: caseStudy.problem,
  caseStudy,
});

const transformListSections = (
  projectsData: ContributedProject[],
  caseStudiesData: CaseStudy[],
) => [
  {
    id: 'projects',
    title: 'Projects',
    description:
      'Projects showcasing various applications and tools developed.',
    children: projectsData.map(mapContributedProject),
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description:
      'Technical breakdowns of selected architecture and implementation work.',
    children: caseStudiesData.map(mapCaseStudy),
  },
];

const HomeScreen = ({ onCaseStudyPress, onProjectPress }: HomeScreenProps) => {
  const listSections = React.useMemo(
    () => transformListSections(contributedProjects, caseStudies),
    [],
  );

  return (
    <ScreenWrapper>
      <Text style={styles.heading}>My Portfolio</Text>
      <ExampleList
        items={listSections}
        onCaseStudyPress={onCaseStudyPress}
        onItemPress={onProjectPress}
        style={styles.list}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;
