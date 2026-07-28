import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { ArrowLeft, Menu, Heart } from "lucide-react-native";

export default function TrainingScreen({ route, navigation }) {
  const {
    title = "Push Up",
    tutorials = 12,
    minutes = 60,
  } = route.params || {};

  return (
    <View className="flex-1 bg-black">
      {/* Gambar workout di bagian atas */}
      <View className="h-[45%] bg-[#333]">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <Pressable
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-6 w-[54px] h-[54px] rounded-full bg-black/40 items-center justify-center"
        >
          <ArrowLeft color="white" size={24} />
        </Pressable>
        <Pressable className="absolute top-10 right-6 w-[54px] h-[54px] rounded-full bg-black/40 items-center justify-center">
          <Menu color="white" size={24} />
        </Pressable>
      </View>

      {/* Deskripsi + tombol start */}
      <View className="flex-1 bg-[#1a1a1a] border border-[#3a3838] rounded-t-[30px] -mt-8 px-9 pt-8">
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-sm">{tutorials} Tutorials</Text>
          <View className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <Text className="text-white text-sm">{minutes} minutes</Text>
          <View className="flex-1" />
          <Heart color="white" size={22} />
        </View>

        <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
          <Text className="text-white text-lg leading-relaxed">
            {title} adalah latihan yang efektif untuk melatih kekuatan otot
            secara menyeluruh. Lakukan gerakan ini secara perlahan dan
            terkontrol untuk hasil terbaik, jaga pernapasan tetap teratur,
            dan hentikan jika merasa nyeri berlebih. Latihan ini cocok
            untuk pemula maupun yang sudah berpengalaman, dan dapat
            disesuaikan intensitasnya sesuai kemampuan masing-masing.
          </Text>
        </ScrollView>

        <Pressable className="bg-accent rounded-full py-4 items-center mb-8 mt-4">
          <Text className="text-white font-semibold text-lg">
            Start training
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
