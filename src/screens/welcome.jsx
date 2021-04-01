import React from 'react';
import {StyleSheet, ImageBackground, View, StatusBar} from 'react-native';
import {Text, Button} from 'react-native-paper';
import welcome_bg from '../assets/images/welcome_bg.jpg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {withTheme} from 'react-native-paper';

const Welcome = ({theme, navigation}) => {
  const {colors} = theme;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={welcome_bg}
        style={styles.bgImage}
        blurRadius={2}>
        <View style={styles.welcomeText}>
          <Text
            style={{
              marginBottom: 30,
              fontSize: 15,
              color: colors.primary,
              fontWeight: '700',
              fontFamily: 'Raleway-Bold',
            }}>
            RISK ANALYSIS OF DIABETES IN HUMAN
          </Text>
          <Text style={{marginBottom: 30, fontSize: 17, fontWeight: '100'}}>
            This app helps to determine or predict the risk of diabetes in human
            body.
          </Text>
        </View>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('login')}>
          Get Started
        </Button>
      </ImageBackground>
    </>
  );
};

export default withTheme(Welcome);

const styles = StyleSheet.create({
  bgImage: {
    height: hp(100),
    width: wp(100),
    resizeMode: 'contain',
    paddingHorizontal: wp(13),
  },
  welcomeText: {
    marginTop: hp(10),
    marginBottom: 30,
  },
  btn: {
    width: '50%',
    borderRadius: 3,
    alignSelf: 'center',
  },
});
