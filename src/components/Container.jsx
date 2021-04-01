import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import PropTypes from 'prop-types';
import bg from '../assets/images/container_bg.png';

const Container = ({children, style}) => {
  const myStyle = {...styles.container, ...style};

  return (
    <View style={myStyle}>
      {/*  <ImageBackground style={styles.shapeBg} source={bg}>
        {children}
      </ImageBackground> */}
      <Image style={styles.shapeBg} source={bg} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

Container.propType = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor:'white'
  },
  shapeBg: {
    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 30,
  },
  content: {
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 17,
  },
});
