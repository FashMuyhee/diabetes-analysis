import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import shapeBg from '../assets/images/container_bg.png';

const RunTest = ({navigation, theme}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={theme.colors.primary}
      />
      <Container>
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
              labelStyle={{
                textTransform: 'capitalize',
                fontFamily: 'Raleway-Regular',
              }}
              style={{marginTop: 40, marginBottom: 30}}>
              Analyze
            </Button>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default withTheme(RunTest);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  registerTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: hp(3),
  },
  form: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0A1933',
    paddingBottom: 10,
    marginBottom: 10,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
  },
  shapeBg: {
    height: '60%',
    width: '100%',
    paddingTop: 30,
    position: 'relative',
    zIndex: 12,
  },
});
