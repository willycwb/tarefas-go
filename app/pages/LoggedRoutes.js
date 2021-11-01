import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import DashboardScreen from "../pages/DashboardScreen";
import InfoScreen from "../pages/InfoScreen";
import TaskStackScreen from "../pages/TaskStackScreen";
import ConfiguracaoScreen from "../pages/ConfiguracaoScreen";
import NovaTaskScreen from "../pages/NovaTaskScreen";
import LinearGradient from "react-native-linear-gradient";
import * as Storage from "../storage/Storage";
import Styles from "../Styles";

const Tab = createBottomTabNavigator();

export default function LoggedRoutes() {
  const usuario = useSelector((state) => state.usuario);
  useEffect(() => {
    console.log('mudando', usuario);
    Storage.storeData("usuario", usuario);
  }, [usuario]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="DashboardStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "DashboardStack") {
              iconName = focused ? "ios-podium" : "ios-podium-outline";
            } else if (route.name === "TaskStack") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "ConfiguracaoStack") {
              iconName = focused ? "ios-cog" : "ios-cog-outline";
            } else if (route.name === "InfoStack") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: " ",
          tabBarActiveTintColor: Styles.primaryColor,
          tabBarInactiveTintColor: Styles.primaryColor,
          order: [
            "DashboardStack",
            "TaskStack",
            "AddTaskStack",
            "ConfiguracaoStack",
            "InfoStack",
          ],
          tabBarPosition: "bottom",
          swipeEnabled: true,
          animationEnabled: true,
          tabBarStyle: styles.container,
        })}
      >
        <Tab.Screen
          name="DashboardStack"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TaskStack"
          component={TaskStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="AddTaskStack"
          component={NovaTaskScreen}
          options={() => ({
            tabBarIcon: () => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  colors={[Styles.primaryColor, Styles.primaryColor]}
                >
                  <Ionicons name="ios-add" size={48} color="#FFF" />
                </LinearGradient>
              </View>
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="ConfiguracaoStack"
          component={ConfiguracaoScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="InfoStack"
          component={InfoScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    backgroundColor: Styles.backgroundDarkColor,
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#9C27B0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
};