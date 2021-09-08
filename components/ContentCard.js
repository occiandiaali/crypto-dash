import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContentCard = () => {
  return (
    // <View>
    //   <Text style={styles.scLabel}>WatchList</Text>
    //   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //     <Text style={styles.scText}>FIVE</Text>
    //     <Text style={styles.scText}>SIX</Text>
    //     <Text style={styles.scText}>SEVEN</Text>
    //     <Text style={styles.scText}>EIGHT</Text>
    //   </ScrollView>
    // </View>
    <View>
      <Text style={styles.scLabel}>WatchList</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.scText}>
          <Text>Tech Pie</Text>
          <Icon name="chart-line-variant" color="blue" size={49} />
          <View style={styles.portfolioUSD}>
            <Text style={styles.portfolioUSDValue}>$377.03</Text>
            <Text style={styles.portfolioUSDSymbol}>USD</Text>
          </View>
          <View style={styles.portfolioToday}>
            <Icon name="triangle" color="#39e312" style={styles.triangle} />
            <Text style={styles.todayValues}>$20.23 | 2.00%</Text>
          </View>
        </View>
        <Text style={styles.scText}>SIX</Text>
        <Text style={styles.scText}>SEVEN</Text>
        <Text style={styles.scText}>EIGHT</Text>
      </ScrollView>
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  portfolioUSD: {
    flexDirection: 'row',
  },
  portfolioUSDSymbol: {
    fontSize: 12,
    color: 'black',
    marginVertical: 15,
  },
  portfolioUSDValue: {
    fontSize: 26,
    color: 'black',
    marginRight: 8,
    fontWeight: 'bold',
  },
  scLabel: {
    fontSize: 18,
    marginTop: 19,
    padding: 9,
  },
  scText: {
    width: 210,
    height: 170,
    borderRadius: 15,
    // backgroundColor: '#c1bdc3',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 13,
    marginRight: 4,
  },
});
