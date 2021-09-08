import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
              <View style={styles.circle}>
                <Text style={styles.circleText}>12.03%</Text>
              </View>
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
  circle: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9e74b2',
    borderLeftColor: '#510a74',
    borderLeftWidth: 3,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circleText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  compLogo: {
    width: 30,
    height: 30,
  },
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

  percentRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  piePercent: {
    marginLeft: 5,
    color: '#77c917',
  },
  pieShares: {
    fontSize: 11,
    color: '#9e74b2',
    marginVertical: 11,
    marginLeft: 30,
  },
  pieTitle: {
    padding: 8,
    fontWeight: 'bold',
  },
  sectionLabel: {
    fontSize: 18,
    marginTop: 19,
    padding: 9,
  },
  subTitle: {
    fontSize: 12,
    color: '#cfd4c8',
    marginTop: -12,
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
