import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreensStackParamList = {
    Search: undefined;
    TabNavigator: undefined;
    Detail: { imdbID: string };
  };