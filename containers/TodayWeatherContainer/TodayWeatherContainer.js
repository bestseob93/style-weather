import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'expo-vector-icons';

function TodayWeatherContainer() {
  return (
    <View style={styles.todayWeatherWrapper}>
      <View style={styles.iconTempWrapper}>
        <MaterialCommunityIcons size={54} name="weather-sunny" color="#fff" />
        <Text style={styles.tempText}>30˚</Text>
      </View>
      <View>
        <Text>9˚/16˚</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todayWeatherWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  iconTempWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default TodayWeatherContainer;
