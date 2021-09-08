import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {pies} from '../data/pies';

const PiesCard = () => {
  return (
    <View>
      <ScrollView
        horizontal
        style={styles.oLay}
        showsHorizontalScrollIndicator={false}>
        {/* Flatlist would be more efficient for larger data sets */}
        {pies.map((pie, index) => (
          <View key={index} style={styles.container}>
            {/* This View container represents each card for the WatchList */}
            <Text style={styles.pieTitle}>{pie.title}</Text>
            {pie.upordown === 'up' ? (
              // I could use some type of npm package like
              // react-native-chart-kit to render the line graphs
              // but I'm using static images for this demo
              <Image
                source={require('./../assets/images/red_line_graph.png')}
                style={styles.graphImg}
              />
            ) : (
              <Image
                source={require('./../assets/images/down_graph.png')}
                style={{width: 120, height: 60}}
              />
            )}
            <View style={styles.valueRow}>
              <Text style={styles.valueText}>{pie.value}</Text>
              <Text style={styles.valueUsd}>{pie.usd}</Text>
            </View>
            <View style={styles.percentRow}>
              {pie.upordown === 'up' ? (
                <>
                  <Icon name="arrow-up-bold" color="#77c917" size={16} />
                  <Text style={styles.piePercent}>{pie.percentages}</Text>
                </>
              ) : (
                <>
                  <Icon name="arrow-down-bold" color="#c91a35" size={16} />
                  <Text style={{color: '#c91a35'}}>{pie.percentages}</Text>
                </>
              )}
            </View>
            <Text style={styles.pieShares}>{pie.shares}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PiesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 210,
    height: 200,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
    marginHorizontal: 13,
    marginRight: 4,
  },
  graphImg: {
    width: 150,
    height: 60,
  },
  oLay: {
    marginTop: -30,
  },
  percentRow: {
    flexDirection: 'row',
  },
  piePercent: {
    paddingLeft: 1,
    color: '#77c917',
    fontWeight: 'bold',
  },
  pieShares: {
    marginTop: 6,
    fontSize: 13,
    color: '#9e74b2',
  },
  pieTitle: {
    padding: 8,
    fontWeight: 'bold',
  },
  valueRow: {
    flexDirection: 'row',
  },
  valueText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 7,
  },
  valueUsd: {
    marginVertical: 8,
  },
});
