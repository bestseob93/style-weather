import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.todayWeatherContainer}>
            <MaterialCommunityIcons size={54} name="weather-sunny" color={'#fff'} />
            <Text style={styles.tempText}>30˚</Text>
          </View>
          <View>
            <Text>9˚/16˚</Text>
          </View>
        </View>
        <View style={styles.weekendWeatherContainer}>
          <Text>Weekend Here</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>So Sunny</Text>
          <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#f7b733',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  todayWeatherContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  weekendWeatherContainer: {
    flex: 1
  },
  tempText: {
    fontSize: 24,
    color: '#fff'
  },
  contentContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
