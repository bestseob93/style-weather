import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AppHeader() {
  return (
    <View style={styles.headerWrapper}>
      <Text>성북구 성북동1가</Text>
      <View style={styles.date}>
        <Text>2019. 06. 15. SAT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  date: {
    flex: 1,
  },
});

export default AppHeader;
