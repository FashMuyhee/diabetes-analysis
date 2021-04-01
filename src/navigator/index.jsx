import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome, Register, RunTest,Dashboard} from '../screens';
import {Context} from '../store/context';
import {NavigationContainer} from '@react-navigation/native';

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
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="run-test" component={RunTest} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
