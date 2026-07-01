/**
 * @format
 */

import { render } from '@testing-library/react-native';
import React from 'react';
import App from './App';

// mock safe area context
jest.mock('react-native-safe-area-context', () => {
  const actual = jest.requireActual('react-native-safe-area-context');
  return {
    ...actual,
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
    SafeAreaView: ({ children }: { children: React.ReactNode }) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

describe('App', () => {
  it('renders HomeScreen', async () => {
    const { getByTestId } = await render(<App />);
    expect(getByTestId('home-screen')).toBeVisible();
  });
});
