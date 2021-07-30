import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome, Register} from '../screens';
import {UserContext} from '../store/UserContext';
import TabNavigator from './tab';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const {user} = useContext(UserContext);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {user ? (
        <Stack.Screen name="dashboard" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default StackNavigator;
