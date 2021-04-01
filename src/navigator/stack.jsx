import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome, Register} from '../screens';
import {Context} from '../store/context';
import TabNavigator from './tab';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const [state] = useContext(Context);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="dashboard" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
