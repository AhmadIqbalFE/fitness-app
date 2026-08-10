import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Heart } from "lucide-react-native";
import AnimatedPressable from "./AnimatedPressable";

//Workout list item
export default function WorkoutListItem({
  title,
  image,
  tutorials,
  minutes,
  onPress,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <AnimatedPressable
      onPress={onPress}
      className="flex-row items-center bg-[#1a1a1a] border border-[#3a3838] rounded-2xl p-3 mb-3"
    >
      <View className="w-[60px] h-[60px] rounded-2xl bg-[#232222] items-center justify-center overflow-hidden">
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 ml-4">
        <Text className="text-white font-semibold text-base">{title}</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-white/70 text-xs">{tutorials} Tutorials</Text>
          <View className="w-1 h-1 rounded-full bg-white/50 mx-2" />
          <Text className="text-white/70 text-xs">{minutes} minutes</Text>
        </View>
      </View>
      <Pressable
        onPress={() => setLiked((prev) => !prev)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Heart
          color={liked ? "#ef4444" : "white"}
          fill={liked ? "#ef4444" : "transparent"}
          size={22}
        />
      </Pressable>
    </AnimatedPressable>
  );
}
