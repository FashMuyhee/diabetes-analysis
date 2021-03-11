import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Register = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
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
        <Text style={styles.registerTitle}>Create Account</Text>
        <View style={styles.form}>
          <TextInput label="Fullname" style={styles.input} />
          <TextInput label="Email" style={styles.input} />
          <TextInput label="Password" style={styles.input} secureTextEntry />
          <TextInput
            label="Confirm Password"
            style={styles.input}
            secureTextEntry
          />
          <Button
            mode="contained"
            labelStyle={{textTransform: 'capitalize'}}
            style={{marginTop: 40, marginBottom: 30}}>
            Sign Up
          </Button>
        </View>
        <Button
          onPress={() => navigation.navigate('login')}
          labelStyle={{textTransform: 'capitalize'}}
          style={{marginTop: hp(5)}}>
          <Text>Already created an account? Login</Text>
        </Button>
      </Container>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  registerTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: hp(3),
    fontWeight: '700',
  },
  form: {
    backgroundColor: 'white',
    height: '80%',
    width: '85%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
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
