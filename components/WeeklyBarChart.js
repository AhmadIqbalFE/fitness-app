import React from "react";
import { View, Text } from "react-native";

// Chart batang mingguan sederhana, dibangun manual dengan View
// (tanpa library chart tambahan) supaya ringan. `data` berbentuk
// [{ day: 'Su', value: 34, color: '#ffae4c' }, ...] dengan value 0-100.
export default function WeeklyBarChart({ data, maxValue = 100 }) {
  const yLabels = [100, 80, 60, 40, 20, 0];

  return (
    <View className="mt-4">
      <View className="flex-row h-[190px]">
        {/* Sumbu Y */}
        <View className="justify-between mr-2 pb-1">
          {yLabels.map((label) => (
            <Text key={label} className="text-white/60 text-xs">
              {label}
            </Text>
          ))}
        </View>

        {/* Area bar */}
        <View className="flex-1 flex-row items-end justify-between border-b border-white/20 pb-0">
          {data.map((item) => (
            <View key={item.day} className="items-center flex-1">
              <View
                className="w-4 rounded-full"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                  minHeight: 4,
                }}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Label hari di sumbu X */}
      <View className="flex-row justify-between mt-2 pl-8">
        {data.map((item) => (
          <Text key={item.day} className="text-white/60 text-xs flex-1 text-center">
            {item.day}
          </Text>
        ))}
      </View>
    </View>
  );
}
