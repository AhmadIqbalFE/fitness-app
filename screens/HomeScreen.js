import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import TopHeader from "../components/TopHeader";
import WorkoutListItem from "../components/WorkoutListItem";

const categories = ["Full body", "Chest", "Shoulder"];

const workouts = [
  {
    id: 1,
    image: require("../assets/images/img1.jpg"),
    title: "Push Up",
    tutorials: 12,
    minutes: 60,
  },
  {
    id: 2,
    image: require("../assets/images/img2.jpg"),
    title: "Sit Up",
    tutorials: 9,
    minutes: 45,
  },
  {
    id: 3,
    image: require("../assets/images/img3.jpg"),
    title: "Bridge",
    tutorials: 7,
    minutes: 25,
  },
  {
    id: 4,
    image: require("../assets/images/img4.jpg"),
    title: "Plank",
    tutorials: 4,
    minutes: 15,
  },
  {
    id: 5,
    image: require("../assets/images/img5.jpg"),
    title: "Pull Up",
    tutorials: 15,
    minutes: 42,
  },
];

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Full body");

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <TopHeader greeting="Welcome back" name="Iqbal" />

        {/* Daily Challenge */}
        <View className="mx-8 mt-2 bg-accent rounded-[31px] h-[165px] flex-row items-center px-5 overflow-hidden">
          <Image
            source={require("../assets/images/img1.png")}
            className="w-[110px] h-[140px]"
          />
          <View className="flex-1 ml-2 mr-3">
            <Text className="text-white font-semibold text-sm">
              We have challenge
            </Text>
            <Text className="text-white mt-1">
              <Text className="font-bold text-4xl">200</Text>
              <Text className="text-base"> step</Text>
            </Text>
            <Pressable className="bg-white rounded-[10px] py-2 mt-3 items-center">
              <Text className="text-black text-sm">Join challenge</Text>
            </Pressable>
          </View>
        </View>

        {/* Category filter */}
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
              image={w.image}
              tutorials={w.tutorials}
              minutes={w.minutes}
              onPress={() =>
                navigation.navigate("Training", {
                  title: w.title,
                  image: w.image,
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
