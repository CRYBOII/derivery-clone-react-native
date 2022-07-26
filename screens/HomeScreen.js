import React, { useEffect, useLayoutEffect } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"

import sanityClient from "../sanity"

function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = React.useState([])
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
          restuarants[]->{
            ...,
            dishes[]->
          }
          }
        
      `
      )
      .then((data) => setFeaturedCategories(data))
  }, [])

  return (
    <SafeAreaView style={styles.container} className=' bg-white pt-5'>
      <View className='flex-row pb-3 items-center mx-2 space-x-2 '>
        <Image
          source={{
            uri: `https://links.papareact.com/wru`,
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className=' flex-1'>
          <Text className=' font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className=' font-bold text-xl '>
            Current Location
            <ChevronDownIcon color='#00CCBB' size={15} className='pl-3' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/* Search Bar */}
      <View className='flex-row items-center  space-x-2 pb-2  px-2'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200  p-3'>
          <SearchIcon color='gray' size={20} />
          <TextInput
            placeholder='Restaurants add cuisines'
            keyboardType='defaults'
          />
        </View>
        <AdjustmentsIcon color='#00CCBB' size={20} />
      </View>
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Features rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
})
