import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CaseStudyDetailsScreen from './screens/CaseStudyDetailsScreen';
import ContributedProjectDetailsScreen from './screens/ContributedProjectDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { colors } from './theme/colors';
import type { CaseStudy, ContributedProject } from './types/portfolio';

const App = () => {
  const [selectedProject, setSelectedProject] =
    React.useState<ContributedProject | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] =
    React.useState<CaseStudy | null>(null);

  const handleProjectPress = (project: ContributedProject) => {
    setSelectedCaseStudy(null);
    setSelectedProject(project);
  };

  const handleCaseStudyPress = (caseStudy: CaseStudy) => {
    setSelectedProject(null);
    setSelectedCaseStudy(caseStudy);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      {selectedCaseStudy ? (
        <CaseStudyDetailsScreen
          caseStudy={selectedCaseStudy}
          onBackPress={() => setSelectedCaseStudy(null)}
        />
      ) : selectedProject ? (
        <ContributedProjectDetailsScreen
          project={selectedProject}
          onBackPress={() => setSelectedProject(null)}
        />
      ) : (
        <HomeScreen
          onCaseStudyPress={handleCaseStudyPress}
          onProjectPress={handleProjectPress}
        />
      )}
    </SafeAreaProvider>
  );
};

export default App;
