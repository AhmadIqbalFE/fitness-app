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

//Images Carousel
const slides = [
  {
    id: 1,
    image: require("../assets/images/slide1.jpg"),
  },
  {
    id: 2,
    image: require("../assets/images/slide2.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/slide3.jpg"),
  },
  {
    id: 4,
    image: require("../assets/images/slide4.jpg"),
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

      <SafeAreaView
        edges={["bottom"]}
        className="bg-dark rounded-t-[32px] -mt-8"
        style={{ height: 350 }}
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
          <Text className="text-white font-extrabold text-4xl leading-snug mt-4">
            Make your body healthier and{" "}
            <Text className="text-accent">stronger</Text>
          </Text>

          {/* Paragraph */}
          <Text className="text-white/80 text-l mt-4 leading-5">
            Sport is a form of physical activity that is usually competitive
            with the aim of increasing physical abilities and skills
          </Text>

          {/* Get Started */}
          <Pressable
            onPress={() => {
              console.log("Get Started ditekan!");
              onGetStarted();
            }}
            className="bg-accent rounded-full py-4 items-center mt-5"
            activeOpacity={0.8}
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
