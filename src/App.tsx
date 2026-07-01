import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ExampleListItem } from './components/ExampleList';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { colors } from './theme/colors';

const App = () => {
  const [selectedProject, setSelectedProject] =
    React.useState<ExampleListItem | null>(null);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />
      {selectedProject ? (
        <DetailsScreen
          project={selectedProject}
          onBackPress={() => setSelectedProject(null)}
        />
      ) : (
        <HomeScreen onProjectPress={setSelectedProject} />
      )}
    </SafeAreaProvider>
  );
};

export default App;
