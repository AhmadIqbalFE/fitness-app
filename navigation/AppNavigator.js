import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IntroScreen from "../screens/IntroScreen";
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ReportScreen from "../screens/ReportScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TrainingScreen from "../screens/TrainingScreen";
import BottomNavbar from "../components/BottomNavbar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tabs utama (Home, Schedule, Report, Profile) pakai
// tab bar custom sesuai desain Figma (pill hitam melayang)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavbar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroWrapper} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        {/* Training dibuka di atas tab bar, dari Home atau Schedule */}
        <Stack.Screen
          name="Training"
          component={TrainingScreen}
          options={{ presentation: "card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Wrapper supaya tombol "Get Started" di IntroScreen bisa
// pindah ke MainTabs lewat navigation.replace
function IntroWrapper({ navigation }) {
  return (
    <IntroScreen onGetStarted={() => navigation.replace("MainTabs")} />
  );
}
