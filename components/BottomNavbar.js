import React from "react";
import { View, Pressable } from "react-native";
import { Home, Calendar, BarChart2, User } from "lucide-react-native";

// Tab bar kustom dipakai oleh React Navigation Bottom Tabs.
// Warna & posisi disesuaikan dengan desain Figma (pill hitam
// dengan highlight oranye di tab yang aktif).
export default function BottomNavbar({ state, navigation }) {
  const icons = {
    Home: Home,
    Schedule: Calendar,
    Report: BarChart2,
    Profile: User,
  };

  return (
    <View className="absolute bottom-6 left-6 right-6 h-16 bg-[#1a1a1a] border border-[#3a3838] rounded-full flex-row items-center justify-around">
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const Icon = icons[route.name];

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            className={`items-center justify-center rounded-[23px] ${
              isFocused ? "bg-accent w-16 h-16" : "w-12 h-12"
            }`}
          >
            <Icon color="white" size={24} />
          </Pressable>
        );
      })}
    </View>
  );
}
