import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { ArrowLeft, Menu, Heart } from "lucide-react-native";
import AnimatedPressable from "../components/AnimatedPressable";

export default function TrainingScreen({ route, navigation }) {
  const {
    title = "Push Up",
    tutorials = 12,
    minutes = 60,
  } = route.params || {};

  const [liked, setliked] = useState(false);

  return (
    <View className="flex-1 bg-black">
      {/* Image description */}
      <View className="h-[45%] bg-[#333]">
        <Image
          source={route.params?.image || require("../assets/images/img1.jpg")}
          className="w-full h-full"
          resizeMode="cover"
        />
        <AnimatedPressable
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-6 w-[54px] h-[54px] rounded-full bg-black/40 items-center justify-center"
        >
          <ArrowLeft color="white" size={24} />
        </AnimatedPressable>
        <AnimatedPressable className="absolute top-10 right-6 w-[54px] h-[54px] rounded-full bg-black/40 items-center justify-center">
          <Menu color="white" size={24} />
        </AnimatedPressable>
      </View>

      {/* Description */}
      <View className="flex-1 bg-[#1a1a1a] border border-[#3a3838] rounded-t-[30px] -mt-8 px-9 pt-8">
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-sm">{tutorials} Tutorials</Text>
          <View className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <Text className="text-white text-sm">{minutes} minutes</Text>
          <View className="flex-1" />
          <Pressable
            onPress={() => setliked((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Heart
              color={liked ? "#ef4444" : "white"}
              fill={liked ? "#ef4444" : "transparent"}
              size={22}
            />
          </Pressable>
        </View>

        <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
          <Text className="text-white text-lg leading-relaxed mt-5">
            {title} adalah latihan yang efektif untuk melatih kekuatan otot
            secara menyeluruh. Lakukan gerakan ini secara perlahan dan
            terkontrol untuk hasil terbaik, jaga pernapasan tetap teratur, dan
            hentikan jika merasa nyeri berlebih. Latihan ini cocok untuk pemula
            maupun yang sudah berpengalaman, dan dapat disesuaikan intensitasnya
            sesuai kemampuan masing-masing.
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
