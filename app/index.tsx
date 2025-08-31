import { useFonts } from 'expo-font';
import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import App from './components/App';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar hidden />
        <App />
      </SafeAreaView>
    </SafeAreaProvider>
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
