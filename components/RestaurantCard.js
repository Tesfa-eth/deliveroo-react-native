import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genres,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imageUrl }} className="h-36 w-64 rounded-sm" />
      <View>
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500 ">
            <Text className="text-green-500">{rating}</Text> ~ {genres}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
