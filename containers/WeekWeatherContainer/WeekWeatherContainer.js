import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { VictoryLabel, VictoryLine } from 'victory-native';

function WeekWeatherContainer() {
  return (
    <ScrollView style={styles.weekWeatherWrapper} horizontal>
      <VictoryLine
        height={120}
        style={{
          data: {
            stroke: '#c43a31',
          },
          parent: {
            border: '1px solid #ccc',
          },
        }}
        data={[
          {
            x: 1,
            y: 23,
          },
          {
            x: 2,
            y: 26,
          },
          {
            x: 3,
            y: 35,
          },
          {
            x: 4,
            y: 30,
          },
          {
            x: 5,
            y: 27,
          },
        ]}
        labels={datum => datum.y}
        labelComponent={<VictoryLabel renderInPortal dy={15} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  weekWeatherWrapper: {
    flex: 1,
  },
});

export default WeekWeatherContainer;
