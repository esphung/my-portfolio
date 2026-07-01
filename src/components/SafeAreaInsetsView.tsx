import React from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaInsetsView = ({ children, style, ...props }: ViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }, style]}
    >
      {children}
    </View>
  );
};

export default SafeAreaInsetsView;
