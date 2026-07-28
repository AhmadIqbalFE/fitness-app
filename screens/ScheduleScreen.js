import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Timer, Flame, Play } from "lucide-react-native";
import TopHeader from "../components/TopHeader";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const startWorkoutCards = [
  { id: 1, title: "Body Building", subtitle: "Full body training", min: 30, cal: 130 },
  { id: 2, title: "Calisthenics", subtitle: "bodyweight training", min: 45, cal: 156 },
  { id: 3, title: "Cardio", subtitle: "Endurance training", min: 60, cal: 190 },
  { id: 4, title: "Pilates", subtitle: "Relaxing training", min: 40, cal: 120 },
];

const dailyExercises = [
  { id: 1, title: "Exercise 1", min: 30, cal: 130 },
  { id: 2, title: "Exercise 2", min: 48, cal: 170 },
  { id: 3, title: "Exercise 3", min: 37, cal: 147 },
  { id: 4, title: "Exercise 4", min: 60, cal: 210 },
  { id: 5, title: "Exercise 5", min: 25, cal: 123 },
  { id: 6, title: "Exercise 6", min: 30, cal: 153 },
  { id: 7, title: "Exercise 7", min: 40, cal: 183 },
];

export default function ScheduleScreen({ navigation }) {
  const [activeDay, setActiveDay] = useState("Su");

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <TopHeader greeting="Good Morning" name="Iqbal" />

        {/* Recent target today card */}
        <View className="mx-8 mt-2 bg-[#4a3f8f] rounded-[31px] h-[165px] px-6 justify-center">
          <Text className="text-white font-semibold text-xl">
            Recent Target Today
          </Text>
          <Text className="text-white font-semibold text-4xl mt-2">Running</Text>
          <Text className="text-white text-base mt-1">20 minutes</Text>
          <View className="absolute right-6 top-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full border-8 border-white/20 items-center justify-center">
            <Text className="text-white font-bold text-xl">67%</Text>
          </View>
        </View>

        {/* Day selector */}
        <View className="flex-row px-8 mt-6 gap-2">
          {days.map((day) => (
            <Pressable
              key={day}
              onPress={() => setActiveDay(day)}
              className={`flex-1 py-2 rounded-2xl border border-[#3a3838] items-center ${
                activeDay === day ? "bg-accent" : "bg-[#1a1a1a]"
              }`}
            >
              <Text className="text-white text-base">{day}</Text>
            </Pressable>
          ))}
        </View>

        {/* Start Workout header */}
        <View className="flex-row justify-between items-center px-8 mt-8 mb-4">
          <Text className="text-white font-semibold text-base">Start Workout</Text>
          <Text className="text-accent">See all</Text>
        </View>

        {/* Horizontal carousel of workout types */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-8">
          {startWorkoutCards.map((card) => (
            <View
              key={card.id}
              className="w-[280px] h-[300px] bg-[#1a1a1a] border border-[#3a3838] rounded-[32px] mr-4 overflow-hidden"
            >
              <View className="h-[170px] bg-[#333] rounded-t-[32px] items-end p-3">
                <View className="w-10 h-10 rounded-full bg-white/90 items-center justify-center">
                  <Play color="black" size={16} fill="black" />
                </View>
              </View>
              <View className="p-4">
                <Text className="text-white font-semibold text-xl">{card.title}</Text>
                <Text className="text-white/70 text-sm mt-1">{card.subtitle}</Text>
                <View className="flex-row gap-2 mt-4">
                  <View className="flex-1 border border-[#3a3838] bg-[#252525] rounded-full py-2 flex-row items-center justify-center gap-2">
                    <Timer color="white" size={16} />
                    <Text className="text-white text-sm">{card.min} min</Text>
                  </View>
                  <View className="flex-1 border border-accent bg-[#252525] rounded-full py-2 flex-row items-center justify-center gap-2">
                    <Flame color="#cd5e31" size={16} />
                    <Text className="text-accent text-sm">{card.cal} Cal</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Daily exercise list */}
        <View className="px-8 mt-8">
          {dailyExercises.map((ex) => (
            <View
              key={ex.id}
              className="flex-row items-center bg-[#1a1a1a] border border-[#3a3838] rounded-2xl p-3 mb-3"
            >
              <View className="w-[80px] h-[80px] rounded-2xl bg-[#333]" />
              <View className="flex-1 ml-4">
                <Text className="text-white font-semibold text-lg">{ex.title}</Text>
                <View className="flex-row gap-2 mt-2">
                  <View className="flex-1 border border-[#3a3838] bg-[#252525] rounded-full py-1.5 flex-row items-center justify-center gap-1">
                    <Timer color="white" size={14} />
                    <Text className="text-white text-xs">{ex.min} min</Text>
                  </View>
                  <View className="flex-1 border border-accent bg-[#252525] rounded-full py-1.5 flex-row items-center justify-center gap-1">
                    <Flame color="#cd5e31" size={14} />
                    <Text className="text-accent text-xs">{ex.cal} Cal</Text>
                  </View>
                </View>
              </View>
              <Pressable className="w-10 h-10 rounded-full bg-white/90 items-center justify-center">
                <Play color="black" size={14} fill="black" />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
