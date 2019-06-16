import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
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

  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: {},
  };

  render() {
    console.log('hi');
    console.log(this.props);

    return (
      <ScrollView style={styles.container}>
        <TodayWeatherContainer />
        <WeekWeatherContainer />
        <FineDustContainer />
        <View>
          <ProductListContainer navigation={this.props.navigation} />
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
