import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle';

import {wishlist} from '../data/wishlist';

const WishlistCard = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Flatlist would be more efficient for larger data sets */}
        {wishlist.map((w, idx) => (
          <View key={idx} style={styles.container}>
            {/* This View container represents each card for the WatchList */}
            <View style={styles.titleRow}>
              <Image source={w.logo} style={styles.compLogo} />
              <View>
                <Text style={styles.pieTitle}>{w.title}</Text>
                <Text style={styles.subTitle}>{w.subTitle}</Text>
              </View>
            </View>
            <Image source={w.graphImg} style={styles.graphImg} />

            <View style={styles.valueRow}>
              <Text style={styles.valueText}>{w.value}</Text>
              <Text style={styles.valueUsd}>{w.usd}</Text>
            </View>
            <View style={styles.percentRow}>
              <Icon name="arrow-up-bold" color="#77c917" size={16} />
              <Text style={styles.piePercent}>{w.percentages}</Text>
            </View>
            <View style={styles.circleRow}>
              <ProgressCircle
                percent={85}
                radius={19}
                borderWidth={3}
                color="#dcc3e7"
                shadowColor="#510a74"
                backgroundColor="#fff">
                <Text style={{fontSize: 9, fontWeight: 'bold'}}>
                  {w.circle}
                </Text>
              </ProgressCircle>
              <Text style={styles.pieShares}>{w.shares}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  // I re-used some of the identifiers from the PieCard
  // styling, because I am sometimes *lazy*

  circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circleText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  compLogo: {
    width: 25,
    height: 25,
    marginVertical: 9,
    marginRight: 5,
  },
  container: {
    backgroundColor: 'white',
    width: 210,
    height: 210,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
    marginHorizontal: 11,
  },
  graphImg: {
    width: 150,
    height: 60,
  },

  percentRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  piePercent: {
    paddingLeft: 1,
    color: '#77c917',
    fontWeight: 'bold',
  },
  pieShares: {
    fontSize: 12,
    color: '#9e74b2',
    marginVertical: 21,
    marginLeft: 70,
  },
  pieTitle: {
    padding: 8,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 10,
    // color: '#cfd4c8',
    color: '#b9bbc1',
    marginTop: -12,
    paddingLeft: 6,
  },
  titleRow: {
    flexDirection: 'row',
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
