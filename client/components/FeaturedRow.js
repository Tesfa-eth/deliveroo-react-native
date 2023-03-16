import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View className="px-4">
      <View className="flex-row mt-4 items-center justify-center">
        <Text className="flex-1 font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 2 }}
        className="mt-4"
      >
        {/* Restaurant cards */}
        <RestaurantCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genres={["Pizza", "Italian"]}
          address="1234 Main St"
          short_description="The best pizza in town"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-122.4324}
          lat={37.78825}
        />
        <RestaurantCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genres={["Pizza", "Italian"]}
          address="1234 Main St"
          short_description="The best pizza in town"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-122.4324}
          lat={37.78825}
        />
        <RestaurantCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genres={["Pizza", "Italian"]}
          address="1234 Main St"
          short_description="The best pizza in town"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-122.4324}
          lat={37.78825}
        />
        <RestaurantCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genres={["Pizza", "Italian"]}
          address="1234 Main St"
          short_description="The best pizza in town"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-122.4324}
          lat={37.78825}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
