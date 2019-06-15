import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FineDustContainer() {
  return (
    <View style={styles.fineDustWrapper}>
      <Text style={styles.title}>미세먼지 나쁨!</Text>
      <Text style={styles.subtitle}>코로 숨을 못쉬어요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fineDustWrapper: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});

export default FineDustContainer;
