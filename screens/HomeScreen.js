import React from 'react';
import {
  // Platform,
  ScrollView,
  StyleSheet,
  // TouchableOpacity,
  View,
} from 'react-native';
// import { WebBrowser } from 'expo';
import ProductListContainer from '../containers/ProductListContainer/ProductListContainer';
import TodayWeatherContainer from '../containers/TodayWeatherContainer/TodayWeatherContainer';
import WeekWeatherContainer from '../containers/WeekWeatherContainer/WeekWeatherContainer';
import FineDustContainer from '../containers/FineDustContainer/FineDustContainer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TodayWeatherContainer />
        <WeekWeatherContainer />
        <FineDustContainer />
        <View>
          <ProductListContainer />
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
});
