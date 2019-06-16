import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'expo-vector-icons';

function TodayWeatherContainer() {
  return (
    <View style={styles.todayWeatherWrapper}>
      <View style={styles.tempTextsWrapper}>
        <Text style={styles.currentWeather}>30˚</Text>
        <Text>어제보다 더 더워요!</Text>
        <View style={styles.maxMinTempWrapper}>
          <Text>9˚</Text>
          <Text>/ </Text>
          <Text>16˚</Text>
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons size={84} name="weather-sunny" color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todayWeatherWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tempTextsWrapper: {
    paddingLeft: 25,
    flexDirection: 'column',
  },
  maxMinTempWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    paddingRight: 25,
  },
  currentWeather: {
    fontSize: 34,
    color: '#fff',
  },
});

export default TodayWeatherContainer;
