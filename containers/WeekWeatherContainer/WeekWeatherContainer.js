import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

function WeekWeatherContainer() {
  return (
    <ScrollView style={styles.weekWeatherContainer} horizontal>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
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
              y: 2,
            },
            {
              x: 2,
              y: 3,
            },
            {
              x: 3,
              y: 5,
            },
            {
              x: 4,
              y: 4,
            },
            {
              x: 5,
              y: 7,
            },
          ]}
        />
      </VictoryChart>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  weekWeatherContainer: {
    flex: 1,
  },
});

export default WeekWeatherContainer;
