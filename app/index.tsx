import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

import App from './components/App';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <App></App>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCD45',
    padding:5,
    justifyContent: 'flex-start',
  }
});
