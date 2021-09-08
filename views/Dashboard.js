import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import ContentCard from '../components/ContentCard';
import TopSection from '../components/TopSection';
import PiesCard from '../components/PiesCard';
import WishlistCard from '../components/WishlistCard';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Dashboard = () => {
  const tabBarheight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <TopSection />
      <PiesCard />
      {/* <View>
        <ScrollView
          horizontal
          style={styles.oLay}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.scText}>ONE</Text>
          <Text style={styles.scText}>TWO</Text>
          <Text style={styles.scText}>THREE</Text>
          <Text style={styles.scText}>FOUR</Text>
        </ScrollView>
      </View> */}

      {/* <ContentCard /> */}
      <Text style={styles.sectionLabel}>WatchList</Text>
      <WishlistCard />

      <Pressable style={styles.fab}>
        <Icon name="plus" color="white" />
      </Pressable>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e1ea',
  },
  fab: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d61fc5',
    borderRadius: 12,
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 20,
  },
  header: {
    height: '24%',
    padding: 9,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#9e74b2',
  },
  headerText: {
    padding: 9,
    color: 'white',
    fontWeight: 'bold',
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
  oLay: {
    marginTop: -26,
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
  sectionLabel: {
    fontSize: 16,
    marginTop: 5,
    padding: 7,
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
});
