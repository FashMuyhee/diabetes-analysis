import React, {useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import validateEmail from '../helper/validateEmail';

const Login = ({navigation, theme}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      // setMessage('All Field are required');
      // Snackbar.show({text: 'All Field are required'});

      return;
    }

    if (validateEmail(email)) {
      if (password.length >= 8) {
        setLoading(true);
        try {
          let response = await auth().signInWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            // Snackbar.show({text: 'Login Successful'});
            setLoading(false);
          }
        } catch (e) {
          console.error(e.message);
          setLoading(false);
          setMessage(e);
        }
      } else {
        // Snackbar.show({
        //   text: 'Password Too Short, must be at least 8 characters ',
        // });
      }
    } else {
      // Snackbar.show({text: 'Invalid Email'});
    }
  };

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
          <TextInput
            label="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon name="email" />}
          />
          <TextInput
            label="Password"
            style={styles.input}
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={setPassword}
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye-off' : 'eye'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            left={<TextInput.Icon name="lock" />}
          />
          <Button
            mode="contained"
            onPress={handleSignIn}
            labelStyle={{textTransform: 'capitalize'}}
            style={{marginTop: 40, marginBottom: 30}}
            loading={loading}
            disabled={loading}>
            Sign In
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
