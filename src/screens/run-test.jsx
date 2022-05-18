import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Container, NavBar} from '../components';
import {Button, Text, withTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import shapeBg from '../assets/images/container_bg.png';
import axios from 'axios';

const RunTest = ({navigation, theme}) => {
  const [age, setAge] = useState('');
  const [bsFast, setBsFast] = useState('');
  const [bsPP, setBsPP] = useState('');
  const [pRandom, setPRandom] = useState('');
  const [pFast, setPFast] = useState('');
  const [hb, setHB] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!age || !bsFast || !bsPP || !pRandom || !pFast || !hb) {
      ToastAndroid.show('All field required !!', ToastAndroid.LONG);
      return false;
    }
    try {
      const raw = {
        data: {
          age: parseInt(age),
          bs_fast: parseFloat(bsFast),
          bs_pp: parseFloat(bsPP),
          plasma_r: parseFloat(pRandom),
          plasma_f: parseFloat(pFast),
          hba1c: parseInt(hb),
        },
      };
      setLoading(true);
      const res = await axios('https://diabetesapiproj.herokuapp.com/analyze', {
        method: 'post',
        data: raw,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res)
      setAge('');
      setBsPP('');
      setBsFast('');
      setPRandom('');
      setHB('');
      setPFast('');
      navigation.navigate('dashboard', {result: res.data});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <ScrollView>
      <Text style={[styles.registerTitle, {color: theme.colors['primary']}]}>
        Fill the form to Run a Quick Test
      </Text>
      <View style={styles.form}>
        <TextInput
          label="Age"
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="number-pad"
          mode="outlined"
        />
        <TextInput
          label="Blood Sugar Fast (mmol/L)"
          style={styles.input}
          value={bsFast}
          keyboardType="number-pad"
          onChangeText={setBsFast}
          mode="outlined"
        />
        <TextInput
          label="Blood Sugar PP (mmol/L)"
          style={styles.input}
          value={bsPP}
          keyboardType="number-pad"
          onChangeText={setBsPP}
          mode="outlined"
        />
        <TextInput
          label="Plasma Random (mmol/L)"
          style={styles.input}
          value={pRandom}
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={setPRandom}
        />
        <TextInput
          mode="outlined"
          label="Plasma Fast (mmol/L)"
          style={styles.input}
          keyboardType="number-pad"
          value={pFast}
          onChangeText={setPFast}
        />
        <TextInput
          keyboardType="number-pad"
          label="HBA1C (Hemoglobin mmol/mol)"
          style={styles.input}
          value={hb}
          onChangeText={setHB}
          mode="outlined"
        />

        <Button
          mode="contained"
          labelStyle={{
            textTransform: 'capitalize',
            fontFamily: 'Raleway-Regular',
          }}
          style={{marginTop: 40, marginBottom: 30, height: 50}}
          loading={loading}
          disabled={loading}
          onPress={handleAnalyze}>
          Analyze
        </Button>
      </View>
    </ScrollView>
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
    width: '95%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#0A1933',
    paddingBottom: 10,
    marginBottom: 10,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 50,
    // marginBottom: 25,
  },
  shapeBg: {
    height: '60%',
    width: '100%',
    paddingTop: 30,
    position: 'relative',
    zIndex: 12,
  },
});
