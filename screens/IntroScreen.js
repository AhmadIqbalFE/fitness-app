import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

// Placeholder gambar workout — ganti dengan foto kamu sendiri.
// Cara ganti ke gambar lokal: taruh file di folder assets/ lalu
// pakai require("../assets/slide1.jpg") menggantikan uri di bawah.
const slides = [
  {
    id: 1,
    image: {
      uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
  },
  {
    id: 2,
    image: { uri: "https://images.unsplash.com/photo-1550345332-09e3ac987658" },
  },
  {
    id: 3,
    image: {
      uri: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
  },
  {
    id: 4,
    image: {
      uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
  },
];

export default function IntroScreen({ onGetStarted }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Carousel gambar — flex:1 artinya "isi semua sisa ruang
          yang tidak dipakai bottom sheet di bawah". Jadi ukurannya
          otomatis menyesuaikan, bukan dipaksa persentase tetap. */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={{ flex: 1 }}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={{ width }}>
            <Image
              source={slide.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {/* Bottom sheet — TIDAK pakai flex-1, jadi tingginya
          otomatis mengikuti konten di dalamnya (dots + tagline +
          paragraph + tombol). Ini yang menjamin tombol "Get Started"
          selalu keliatan penuh di layar HP apa pun. */}
      <SafeAreaView
        edges={["bottom"]}
        className="bg-dark rounded-t-[32px] -mt-8"
      >
        <View className="px-6 pt-6 pb-4">
          {/* Dots indicator */}
          <View className="flex-row justify-center mb-3">
            {slides.map((slide, index) => (
              <View
                key={slide.id}
                className={`h-2 rounded-full mx-1 ${
                  index === activeIndex ? "w-6 bg-accent" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </View>

          {/* Tagline */}
          <Text className="text-white font-extrabold text-2xl leading-snug">
            Make your body healthier and{" "}
            <Text className="text-accent">stronger</Text>
          </Text>

          {/* Paragraph */}
          <Text className="text-white/80 text-sm mt-2 leading-5">
            Sport is a form of physical activity that is usually competitive
            with the aim of increasing physical abilities and skills
          </Text>

          {/* Tombol Get Started */}
          <Pressable
            onPress={() => {
              console.log("Get Started ditekan!");
              onGetStarted();
            }}
            className="bg-accent rounded-full py-4 items-center mt-5"
          >
            <Text className="text-white font-semibold text-lg">
              Get Started
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
