import React from "react";
import { View, Text } from "react-native";
import TopHeader from "../components/TopHeader";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-black">
      <TopHeader greeting="Good Morning" name="Iqbal" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white/60 text-base">
          Halaman Profile — belum ada di desain Figma, tinggal kamu isi sendiri
          sesuai kebutuhan (edit profil, pengaturan, dll).
        </Text>
      </View>
    </View>
  );
}
