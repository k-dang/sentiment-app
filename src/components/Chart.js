import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Path } from 'react-native-svg';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Chart = ({ data }) => {
  const Line = ({ line }) => (
    <Path key={'line'} d={line} stroke={'rgb(134, 65, 244)'} fill={'none'} />
  );
  let lowest = 1;
  let highest = -1;
  data.forEach(item => {
    if (item.sentiment < lowest) {
      lowest = item.sentiment;
    } else if (item.sentiment > highest) {
      highest = item.sentiment;
    }
  });

  const bounds = [lowest, highest];
  return (
    <View style={styles.container}>
      <YAxis
        data={bounds}
        contentInset={{ top: 30, bottom: 30 }}
        svg={{
          fill: 'grey',
          fontSize: 10
        }}
        numberOfTicks={5}
        formatLabel={item => item}
      />
      <AreaChart
        style={styles.chart}
        data={data}
        xAccessor={({ item }) => item.date_formated}
        yAccessor={({ item }) => item.sentiment}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
      >
        <Line />
        <Grid />
      </AreaChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row'
  },
  chart: {
    flex: 1
  }
});

export default Chart;
