import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import TopHeader from "../components/TopHeader";
import WorkoutListItem from "../components/WorkoutListItem";

const categories = ["Full body", "Chest", "Shoulder"];

const workouts = [
  { id: 1, title: "Push Up", tutorials: 12, minutes: 60 },
  { id: 2, title: "Sit Up", tutorials: 9, minutes: 45 },
  { id: 3, title: "Bridge", tutorials: 7, minutes: 25 },
  { id: 4, title: "Plank", tutorials: 4, minutes: 15 },
  { id: 5, title: "Pull Up", tutorials: 15, minutes: 42 },
];

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Full body");

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <TopHeader greeting="Welcome back" name="Iqbal" />

        {/* Promo / challenge banner */}
        <View className="mx-8 mt-2 bg-accent/90 rounded-[31px] h-[165px] flex-row items-center px-5 overflow-hidden">
          <View className="w-[110px] h-[140px] bg-black/20 rounded-2xl" />
          <View className="flex-1 ml-4">
            <Text className="text-white font-light text-sm">We have challenge</Text>
            <Text className="text-white mt-1">
              <Text className="font-bold text-4xl">200</Text>
              <Text className="text-base"> step</Text>
            </Text>
            <Pressable className="bg-white rounded-[10px] py-2 mt-3 items-center">
              <Text className="text-black text-sm">Join challenge</Text>
            </Pressable>
          </View>
        </View>

        {/* Category filter pills */}
        <View className="flex-row px-8 mt-6 gap-3">
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-2xl border border-[#3a3838] ${
                activeCategory === cat ? "bg-[#554b4b]" : "bg-[#1a1a1a]"
              }`}
            >
              <Text className="text-white text-sm">{cat}</Text>
            </Pressable>
          ))}
        </View>

        {/* Section header */}
        <View className="flex-row justify-between items-center px-8 mt-8 mb-4">
          <Text className="text-white font-semibold text-base">
            Recommended Workout
          </Text>
          <Text className="text-accent">See all</Text>
        </View>

        {/* Workout list */}
        <View className="px-8">
          {workouts.map((w) => (
            <WorkoutListItem
              key={w.id}
              title={w.title}
              tutorials={w.tutorials}
              minutes={w.minutes}
              onPress={() =>
                navigation.navigate("Training", {
                  title: w.title,
                  tutorials: w.tutorials,
                  minutes: w.minutes,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
