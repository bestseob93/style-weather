import React from 'react';
import {
  // Platform,
  ScrollView,
  StyleSheet,
  // TouchableOpacity,
  View,
} from 'react-native';
// import { WebBrowser } from 'expo';
import AppHeaderContainer from '../containers/AppHeaderContainer/AppHeaderContainer';
import ProductListContainer from '../containers/ProductListContainer/ProductListContainer';
import TodayWeatherContainer from '../containers/TodayWeatherContainer/TodayWeatherContainer';
import WeekWeatherContainer from '../containers/WeekWeatherContainer/WeekWeatherContainer';
import FineDustContainer from '../containers/FineDustContainer/FineDustContainer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <AppHeaderContainer />,
    headerStyle: {
      backgroundColor: '#f7b733',
      borderBottomWidth: 0,
    },
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
