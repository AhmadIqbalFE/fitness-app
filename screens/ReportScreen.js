import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Flame, Footprints, Droplet, Moon } from "lucide-react-native";
import TopHeader from "../components/TopHeader";
import WeeklyBarChart from "../components/WeeklyBarChart";

// Data mingguan — ganti dengan data asli dari backend/state management kamu
const weeklyData = [
  { day: "Su", value: 34, color: "#ffae4c" },
  { day: "Mo", value: 43, color: "#3cc3df" },
  { day: "Tu", value: 65, color: "#8979ff" },
  { day: "We", value: 27, color: "#537ff1" },
  { day: "Th", value: 52, color: "#ff928a" },
  { day: "Fr", value: 33, color: "#ffae4c" },
  { day: "Sa", value: 15, color: "#6fd195" },
];

const statCards = [
  { key: "calories", label: "Calories", value: "720", unit: "Kcal", bg: "#95553b", Icon: Flame },
  { key: "steps", label: "Steps", value: "1220", unit: "Steps", bg: "#896c9e", Icon: Footprints },
  { key: "water", label: "Water", value: "2.8", unit: "Liters", bg: "#4786a5", Icon: Droplet },
  { key: "sleep", label: "Sleep", value: "8", unit: "Hours", bg: "#5a8e48", Icon: Moon },
];

export default function ReportScreen() {
  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <TopHeader greeting="Good Morning" name="Iqbal" />

        <Text className="text-white font-semibold text-2xl px-8 mt-2">
          Activity Report
        </Text>

        {/* 4 stat cards, grid 2x2 */}
        <View className="flex-row flex-wrap px-8 mt-6 gap-4">
          {statCards.map(({ key, label, value, unit, bg, Icon }) => (
            <View
              key={key}
              className="w-[150px] h-[150px] rounded-[20px] border border-[#3a3838] p-4 justify-between"
              style={{ backgroundColor: bg }}
            >
              <View className="flex-row justify-between items-start">
                <Text className="text-white text-lg">{label}</Text>
                <Icon color="white" size={20} />
              </View>
              <View>
                <Text className="text-white font-semibold text-2xl">{value}</Text>
                <Text className="text-white/80 text-base">{unit}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Weekly average header */}
        <View className="flex-row justify-between items-center px-8 mt-8">
          <Text className="text-white font-semibold text-2xl">Workout</Text>
          <Text className="text-white/70 text-base">Weekly average</Text>
        </View>
        <View className="flex-row justify-between items-center px-8 mt-1">
          <Text className="text-white font-semibold text-2xl">40 min</Text>
          <Text className="text-white font-semibold text-2xl">33 min</Text>
        </View>

        {/* Chart mingguan */}
        <View className="mx-8 mt-4">
          <WeeklyBarChart data={weeklyData} />
        </View>
      </ScrollView>
    </View>
  );
}
