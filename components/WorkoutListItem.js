import React from "react";
import { View, Text, Pressable } from "react-native";
import { Heart } from "lucide-react-native";

// Satu baris item workout: gambar kecil, judul, jumlah tutorial,
// durasi, dan tombol like. Dipakai berulang di Home Page.
export default function WorkoutListItem({
  title,
  tutorials,
  minutes,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center bg-[#1a1a1a] border border-[#3a3838] rounded-2xl p-3 mb-3"
    >
      <View className="w-[60px] h-[60px] rounded-2xl bg-[#232222] items-center justify-center overflow-hidden">
        <View className="w-10 h-10 bg-accent/30 rounded-xl" />
      </View>

      <View className="flex-1 ml-4">
        <Text className="text-white font-semibold text-base">{title}</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-white/70 text-xs">{tutorials} Tutorials</Text>
          <View className="w-1 h-1 rounded-full bg-white/50 mx-2" />
          <Text className="text-white/70 text-xs">{minutes} minutes</Text>
        </View>
      </View>

      <Heart color="white" size={20} />
    </Pressable>
  );
}
