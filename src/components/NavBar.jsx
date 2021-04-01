import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const NavBar = ({left, right, center, bgColor, customStyles}) => {
  return (
    <View
      style={[
        styles.navbar,
        customStyles,
        {backgroundColor: bgColor ? bgColor : '#0A1933'},
      ]}>
      <View
        style={{...styles.navbarItem, alignItems: 'flex-start', width: '10%'}}>
        {left ? left : null}
      </View>
      <View
        style={{...styles.navbarItem, alignItems: 'flex-start', width: '50%'}}>
        {center ? center : null}
      </View>
      <View style={{...styles.navbarItem, alignItems: 'flex-end'}}>
        {right ? right : null}
      </View>
    </View>
  );
};

NavBar.propType = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    height: '7%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    elevation: 10,
  },
  navbarItem: {
    width: '33.33%',
  },
});
