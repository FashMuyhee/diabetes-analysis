import React, {useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import validateEmail from '../helper/validateEmail';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const handleSignUp = async () => {
    if (!email || !password || !fullname) {
      // Snackbar.show({text: 'All Field are required'});
      return;
    }

    if (validateEmail(email)) {
      if (password.length >= 8) {
        setLoading(true);
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            const update = {
              displayName: fullname,
              photoURL: null,
            };

            auth()
              .currentUser.updateProfile(update)
              .then((res) => {
                console.log(res);
                // Snackbar.show({text: 'welcome'});
                setLoading(false);
              })
              .catch((e) => {
                setLoading(false);
                console.log(e.message);
              });
          }
        } catch (e) {
          console.error(e.message);
          setLoading(false);
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
    <Container style={styles.container}>
      <Text style={[styles.registerTitle, {color: theme.colors['primary']}]}>
        Create Account
      </Text>
      <View style={styles.form}>
        <TextInput
          label="Fullname"
          style={styles.input}
          onChangeText={setFullname}
          value={fullname}
          mode="outlined"
        />
        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          label="Password"
          style={styles.input}
          mode="outlined"
          secureTextEntry={passwordVisible}
          onChangeText={setPassword}
          value={password}
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />

        <Button
          mode="contained"
          labelStyle={{
            textTransform: 'capitalize',
            alignContent: 'center',
            alignSelf: 'center',
          }}
          style={{marginTop: 50}}
          contentStyle={{height: 50}}
          onPress={handleSignUp}
          loading={loading}
          disabled={loading}>
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
    height: hp(60),
    width: '85%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 50,
  },
});
