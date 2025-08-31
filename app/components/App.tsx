import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuInferior from './MenuInferior';

type AppProps = {
  children?: ReactNode
};

export default function App({children}: AppProps){

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Foodi App</Text>
      <MenuInferior />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding:5,
    paddingTop: 48,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    boxSizing:'border-box',
    borderColor:'#FFE397',
    borderWidth:15,
    borderRadius:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
