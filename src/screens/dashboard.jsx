import React, {useContext} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Text, withTheme, Avatar, Card, Button} from 'react-native-paper';
import {Container, NavBar, ScrollContainer, List} from '../components';
import user from '../assets/images/user.png';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle';
import {UserContext} from '../store/UserContext';
import auth from '@react-native-firebase/auth';

const Dashboard = ({theme}) => {
  const {user: authUser} = useContext(UserContext);

  const logout = async () => {
    await auth().signOut();
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={theme.colors.primary}
      />
      <NavBar
        left={<Avatar.Image source={user} size={35} />}
        center={
          <Text style={{color: 'white', fontSize: 20}}>
            {authUser?.displayName}
          </Text>
        }
        right={
          <FeatherIcon
            name="log-out"
            color="white"
            size={30}
            onPress={logout}
          />
        }
      />
      <Container>
        <ScrollContainer
          style={styles.container}
          contentContainerStyle={{alignItems: 'center'}}>
          <Card style={styles.resultCard}>
            <Text>Analysis</Text>
            <View style={styles.progressBar}>
              <ProgressCircle
                percent={30}
                radius={70}
                borderWidth={3}
                color={theme.colors.primary}
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{fontSize: 18}}>120</Text>
              </ProgressCircle>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Raleway-Bold',
                  fontWeight: '400',
                }}>
                Type 2
              </Text>
              <Text
                style={{
                  color: 'red',
                }}>
                High Risk Today
              </Text>
            </View>
            <View style={styles.resultDetail}>
              <List label="Age" content="50" />
              <List label="bp" content="30mmhg" />
              <List label="weight" content="50kg" />
              <List label="insulin" content="50ml" />
              <List label="height (cm)" content="170" />
              <List label="pregnancy" content="3" />
              <List label="bmi" content="100kg/m2" />
              <List label="pedigree" content="0.23" />
            </View>
            <View>
              <Text style={{textAlign: 'justify'}}>
                A blood sugar level less than 140 mg/dL (7.8 mmol/L) is normal.
                A reading of more than 200 mg/dL (11.1 mmol/L) after two hours
                indicates diabetes. A reading between 140 and 199 mg/dL (7.8
                mmol/L and 11.0 mmol/L) indicates prediabetes.
              </Text>
            </View>
          </Card>
        </ScrollContainer>
      </Container>
    </>
  );
};

export default withTheme(Dashboard);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    display: 'flex',
    marginTop: 20,
  },
  resultCard: {
    height: hp(80),
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '95%',
  },
  progressBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  resultDetail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '30%',
    marginBottom: 20,
  },
  listItem: {
    flexBasis: wp(43),
  },
});
