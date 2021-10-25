import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useActions} from '@hooks';
import {
  Swipe,
  Details,
  Add,
  SignIn,
  SignUp,
  ResetPassword,
  SignInFB,
} from 'screens';
import {ReLoadButton, LogoTitle} from '@components';
import {CLR_BLACK_02, CLR_WHITE} from '@constants';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {handlerReLoadTodos, settings} = useActions();
  const {userToken} = settings;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: CLR_BLACK_02,
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: '200',
            color: CLR_WHITE,
          },
        }}>
        {userToken === null ? (
          <>
            <Stack.Screen
              name="SignInFB"
              component={SignInFB}
              options={{headerTitle: 'SignInFB'}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerTitle: 'Sign In'}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerTitle: 'Sign Up'}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{headerTitle: 'Reset Password'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="List"
              component={Swipe}
              options={{
                headerTitle: () => <LogoTitle />,
                headerRight: () => (
                  <ReLoadButton onPress={() => handlerReLoadTodos()} />
                ),
              }}
            />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Add" component={Add} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
