import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Key, useLayoutEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation: NavigationProp<any, any> = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 relative" style={styles.topStatusBarMargin}>
      <View className="flex-row mt-4 px-4 items-center space-x-2">
        <View className="bg-black rounded-full p-4">
          <Text className="text-cyan-500 font-bold text-2xl">GO</Text>
        </View>
        <Text className="font-bold text-2xl">Travel</Text>
      </View>
      <View className="px-4 mt-8">
        <Text className="text-4xl text-gray-600">Enjoy the trip with</Text>
        <Text className="font-bold text-3xl mt-4 text-cyan-500">
          Good Moments
        </Text>
        <Text className="leading-6 text-base mt-4 text-gray-700">
          Discover. Plan. Explore. With Go Travel, your ultimate companion for
          seamless journeys!
        </Text>
      </View>
      <View className="w-96 h-96 bg-cyan-500 rounded-full absolute bottom-20 -right-44"></View>
      <View className="w-96 h-96 bg-orange-500 rounded-full absolute -bottom-20 -left-44"></View>
      <View className="flex-1 items-center justify-center relative">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={require("../assets/hero.png")}
          className="w-full h-full mt-8 object-cover"
        />
        <View className="flex-1 items-center justify-center w-24 h-24 border-l-2 border-r-2 border-t-4 border-cyan-500 rounded-full absolute bottom-24">
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount={"infinite"}
              className="bg-cyan-500 w-20 h-20 rounded-full items-center justify-center"
            >
              <Text className="text-3xl text-gray-50 font-bold">GO</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topStatusBarMargin: {
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
