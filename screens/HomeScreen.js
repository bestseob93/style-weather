import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }

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
        <ScrollView style={styles.weekendWeatherContainer} horizontal>
          <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />
          </VictoryChart>
        </ScrollView>
        <View style={styles.fineDustContainer}>
          <Text style={styles.title}>미세먼지 나쁨!</Text>
          <Text style={styles.subtitle}>코로 숨을 못쉬어요</Text>
        </View>
        <View style={styles.weatherLookContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                <Text>{item.id}</Text>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
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
  fineDustContainer: {
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
  },
  weatherLookContainer: {
    flex: 1
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
