import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Register, RunTest, Dashboard} from '../screens';
import {UserContext} from '../store/UserContext';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();
import auth from '@react-native-firebase/auth';

const StackNavigator = () => {
  const {user} = useContext(UserContext);
  const {colors} = useTheme();
  const logout = async () => await auth().signOut();
  
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      {user ? (
        <>
          <Stack.Screen
            options={{
              headerTitle: 'Run Test',
              headerRight: ({}) => (
                <Icon
                  name="log-out"
                  style={{marginRight: 10}}
                  size={25}
                  color="white"
                  onPress={logout}
                />
              ),
            }}
            name="run-test"
            component={RunTest}
          />
          <Stack.Screen
            name="dashboard"
            options={{
              headerTitle: 'Result',
            }}
            component={Dashboard}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="register"
            component={Register}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default StackNavigator;
