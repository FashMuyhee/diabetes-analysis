import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = ({navigation, theme}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={theme.colors.primary}
      />
      <Container style={styles.container}>
        <NavBar
          bgColor="transparent"
          left={
            <Icon
              name="arrow-back"
              color="white"
              size={30}
              onPress={() => navigation.goBack()}
            />
          }
        />
        <Text style={styles.loginTitle}>Login To Your Account</Text>
        <View style={styles.form}>
          <TextInput label="Email" style={styles.input} />
          <TextInput label="Password" style={styles.input} secureTextEntry />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('dashboard')}
            labelStyle={{textTransform: 'capitalize'}}
            style={{marginTop: 40, marginBottom: 30}}>
            Sign In
          </Button>
          <Button
            labelStyle={{textTransform: 'capitalize'}}
            style={{marginTop: 40, marginBottom: 30}}>
            <Text> Recover Password</Text>
          </Button>
        </View>
        <Button
          labelStyle={{
            textTransform: 'capitalize',
            fontFamily: 'Raleway-Regular',
          }}
          style={{marginTop: hp(10)}}
          onPress={() => navigation.navigate('register')}
          color="black">
          Create an Account
        </Button>
      </Container>
    </>
  );
};

export default withTheme(Login);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  loginTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: hp(8),
    fontWeight: '700',
  },
  form: {
    backgroundColor: 'white',
    height: '55%',
    width: '85%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0A1933',
    marginBottom: 20,
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
  },
});
