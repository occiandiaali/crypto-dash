import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userIdRow}>
        <View style={styles.userId}>
          <Text style={styles.userEmail}>@ethansmith</Text>
          <Icon name="chevron-down" color="white" size={21} />
        </View>

        <View style={styles.beekeeper}>
          <Icon name="school-outline" color="black" size={26} />
        </View>
      </View>
      <View style={styles.portfolioContainer}>
        <View style={styles.portfolioLabel}>
          <Text style={styles.headerText}>Portfolio</Text>
          <Icon
            name="chevron-down"
            color="white"
            size={20}
            style={styles.portfolioCaret}
          />
        </View>
        <View style={styles.portfolioUSD}>
          <Text style={styles.portfolioUSDValue}>$850.64</Text>
          <Text style={styles.portfolioUSDSymbol}>USD</Text>
        </View>
        <View style={styles.portfolioToday}>
          <Icon name="triangle" color="#39e312" style={styles.triangle} />
          <Text style={styles.todayValues}>$20.23 | 2.00%</Text>
          <Icon name="chevron-right" color="#39e312" size={21} />
          <Text style={styles.todayText}>Today</Text>
        </View>
        <Text style={styles.pies}>Your Pies</Text>
      </View>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  beekeeper: {
    backgroundColor: 'white',
    padding: 9,
    margin: 13,
    width: 39,
    height: 39,
    borderRadius: 5,
  },
  container: {
    height: '36%',
    padding: 9,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#9e74b2',
  },
  headerText: {
    padding: 9,
    color: 'white',
  },
  headerTextView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 3,
  },
  moneyTextView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moneyValue: {
    color: 'white',
    fontSize: 26,
    padding: 12,
  },
  pies: {
    color: 'white',
    marginTop: 8,
    marginBottom: 12,
  },
  portfolioCaret: {
    marginVertical: 10,
  },
  portfolioLabel: {
    flexDirection: 'row',
  },
  portfolioToday: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '47%',
    padding: 2,
    borderRadius: 13,
    marginBottom: 8,
  },
  portfolioUSD: {
    flexDirection: 'row',
  },
  portfolioUSDSymbol: {
    fontSize: 12,
    color: 'white',
    marginVertical: 15,
  },
  portfolioUSDValue: {
    fontSize: 26,
    color: 'white',
    marginRight: 8,
    fontWeight: 'bold',
  },
  statTextView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius: 26,
    width: '45%',
  },
  statValue: {
    color: '#3ca507',
    fontWeight: 'bold',
  },
  todayText: {
    fontWeight: 'bold',
  },
  todayValues: {
    fontSize: 14,
    color: '#39e312',
  },
  triangle: {
    paddingRight: 4,
    marginVertical: 3,
  },
  userEmail: {
    color: 'white',
  },
  userId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 2,
    backgroundColor: '#cbadd8',
    width: '35%',
    borderRadius: 26,
  },
  userIdRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});