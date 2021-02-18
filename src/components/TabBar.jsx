import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const Icon = ({name}) => (
  <TouchableWithoutFeedback>
    <Image source={name} accessibilityLabel="icon" />
  </TouchableWithoutFeedback>
);
const TabBar = () => {
  return (
    <View style={styles.tabBarContainer}>
      {/*  <Icon name={home} />
      <Icon name={bookmark} />
      <Icon name={cart} />
      <Icon name={setting} /> */}
      <Text>Tababr</Text>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'white',
    width: '90%',
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    height: 75,
    borderRadius: 18,
    elevation: 1,
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
