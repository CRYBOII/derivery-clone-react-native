import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { selectRetaurants } from "../features/restaurantSlice"
import { useSelector } from "react-redux"
import { XCircleIcon, XIcon } from "react-native-heroicons/solid"
import * as Progress from "react-native-progress"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRetaurants)
  return (
    <View className=' bg-[#00CCBB] flex-1'>
      <SafeAreaView style={styles.container}>
        <View className=' flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon size={30} color='white' />
          </TouchableOpacity>
          <Text className=' font-light text-white text-lg'>Order Help</Text>
        </View>
        <View>
          <View className=' bg-white mx-5 my-2 p-6 z-50  rounded-md shadow-md'>
            <View className=' flex-row justify-between '>
              <View>
                <Text className=' text-lg text-gray-400'>
                  Estimated Arrival
                </Text>
                <Text className=' text-4xl font-bold'>44-55 Minutes</Text>
              </View>
              <Image
                source={{
                  uri: "https://links.papareact.com/fls",
                }}
                className='h-20 w-20'
              />
            </View>
            <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
            <Text className=' mt-3 text-gray-500'>
              Your order at {restaurant.title} is being prepared
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        // initialRegion={{
        //   latitude: restaurant.lat,
        //   longitude: restaurant.long,
        //   latitudeDelta: 0.005,
        //   longitudeDelta: 0.005,
        // }}
        // provider={PROVIDER_GOOGLE}
        className=' flex-1 -my-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className=' bg-white flex-row items-center space-x-5 h-20'>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className=' flex-1'>
          <Text className=' text-lg'>Jera Jera</Text>
          <Text className=' text-gray-400'>Your Rider</Text>
        </View>
        <Text className=' text-[#00CCBB] text-lg mr-5 font-bold '> Call</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
})

export default DeliveryScreen
