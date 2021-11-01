import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskScreen from "./TaskScreen";
import NovaTaskScreen from "./NovaTaskScreen";
import { View } from "react-native";
import Styles from '../Styles';

const HomeStack = createStackNavigator();

export default function TaskStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          title: 'TAREFAS',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name="NewTask"
        component={NovaTaskScreen}
        options={{ title: "NOVA TAREFA" }}
      />
    </HomeStack.Navigator>
  );
}
