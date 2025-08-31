import React from 'react';
import { StyleSheet, View } from 'react-native';
import CabecalhoHome from './CabecalhoHome';
import MenuInferior from './MenuInferior';

export default function App(){
  return (
    <View style={styles.container}>
      <CabecalhoHome />
      <MenuInferior />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor: '#FFF',
    padding:8,
    paddingTop: 20,
    boxSizing:'border-box',
    borderColor:'#FFE397',
    borderWidth:15,
    borderRadius:35
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
