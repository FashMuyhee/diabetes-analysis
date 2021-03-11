import React from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RunTest = ({navigation}) => {
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
          center={<Text style={{color: 'white', fontSize: 20}}>Run Test</Text>}
        />
        <ScrollView>
          <Text style={styles.registerTitle}>
            Fill the form to Run a Quick Test
          </Text>
          <View style={styles.form}>
            <TextInput label="Age" style={styles.input} />
            <TextInput label="Weight" style={styles.input} />
            <TextInput label="Height" style={styles.input} />
            <TextInput label="BMI" style={styles.input} />
            <TextInput label="Blood Pressure" style={styles.input} />
            <TextInput label="Pregnancies No (Optional)" style={styles.input} />
            <TextInput label="Pedigree Function" style={styles.input} />
            <TextInput label="Outcome" style={styles.input} />

            <Button
              mode="contained"
              labelStyle={{textTransform: 'capitalize'}}
              style={{marginTop: 40, marginBottom: 30}}>
              Analyze
            </Button>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default RunTest;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  registerTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: hp(3),
  },
  form: {
    backgroundColor: 'white',
    // height: '100%',
    width: '95%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0A1933',
    marginBottom: 20,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
  },
});
