import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInputBase,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon as AdjustmentsIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "restaurant"]{
        ...,

      }`
      )
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pt-6 pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-semibold text-gray-400 text-xs">
            Deliver Now
          </Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search bar */}
      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="#00CCBB" />
          <TextInput
            placeholder="restaurants and hotels"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Row */}
        {restaurants &&
          restaurants.map((restaurant) => (
            <FeaturedRow
              key={restaurant._id}
              id={restaurant._id}
              title={restaurant.name}
              description={restaurant.shortdescription}
              featuredCategory={restaurant.category.title}
            />
          ))}
        {/* <FeaturedRow
          id="123"
          title="Featured Restaurants"
          description="The best restaurants in town"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="The best restaurants in town"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="The best restaurants in town"
          featuredCategory="featured"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
