import React from "react";
import { View, Text, Image } from "react-native";
import { Bell } from "lucide-react-native";

export default function TopHeader({
  greeting = "Welcome back",
  name = "Iqbal",
}) {
  return (
    <View className="flex-row items-center px-8 pt-14 pb-4">
      <Image
        source={require("../assets/images/profile.jpeg")}
        className="w-11 h-11 rounded-full bg-gray-300"
      />
      <View className="ml-3 flex-1">
        <Text className="text-white font-light text-sm">{greeting}</Text>
        <Text className="text-white font-semibold text-xl">{name}</Text>
      </View>
      <Bell color="white" size={22} />
    </View>
  );
}
