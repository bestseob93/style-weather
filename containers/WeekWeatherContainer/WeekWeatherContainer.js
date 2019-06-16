import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryGroup,
} from 'victory-native';
import { maxTemps, minTemps } from '../../constants/JSONdatas';

function CustomLabel(props) {
  console.log('customlabel');
  console.log(props);
  return (
    <View>
      <VictoryLabel {...props} />
      <Text>hi</Text>
    </View>
  );
}

console.log(CustomLabel);

function WeekWeatherContainer() {
  const redColor = '#c43a31';
  const blueColor = '#0000f3';
  return (
    <View style={styles.weekWeatherWrapper} horizontal>
      <View style={styles.dayNameWrapper}>
        <Text>월</Text>
        <Text>화</Text>
        <Text>수</Text>
        <Text>목</Text>
        <Text>금</Text>
        <Text>토</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <VictoryGroup width={360} height={170}>
          <VictoryLine
            style={{
              data: {
                stroke: redColor,
              },
              parent: {
                border: '1px solid #ccc',
              },
            }}
            data={maxTemps}
            labels={datum => datum.y}
            labelComponent={<VictoryLabel renderInPortal dy={3} />}
          />
          <VictoryScatter
            style={{ data: { fill: '#003' } }}
            data={maxTemps}
            size={3}
          />
          <VictoryLine
            style={{
              data: {
                stroke: blueColor,
              },
              parent: {
                border: '1px solid #ccc',
              },
            }}
            data={minTemps}
            labels={datum => datum.y}
            labelComponent={<VictoryLabel renderInPortal dy={3} />}
          />
          <VictoryScatter
            style={{ data: { fill: '#003' } }}
            data={minTemps}
            size={3}
          />
        </VictoryGroup>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekWeatherWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 70,
  },
  dayNameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 360,
    paddingHorizontal: 25,
  },
});

export default WeekWeatherContainer;
