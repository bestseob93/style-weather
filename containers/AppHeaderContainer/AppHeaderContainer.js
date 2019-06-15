import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AppHeader() {
  return (
    <View style={styles.headerWrapper}>
      <Text>성북구 성북동1가</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AppHeader;
