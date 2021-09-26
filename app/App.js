import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import InfoScreen from "./pages/InfoScreen";
import TaskStackScreen from "./pages/TaskStackScreen";
import TaskScreen from "./pages/TaskScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TaskStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "TaskStack") {
              iconName = focused ? "ios-list-outline" : "ios-list";
            } else if (route.name === "Info") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="TaskStack" component={TaskStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: "SOBRE" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
