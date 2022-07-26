import { View, Text, SafeAreaView } from "react-native"
import React from "react"
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 1)
  }, [])
  return (
    <SafeAreaView className=' bg-[#a7c8e7] flex-1 justify-center items-center'>
      <Animatable.Image
        animation='slideInUp'
        iterationCount={1}
        source={require("../assets/VLmj.gif")}
        className='w-96 h-96'
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg font-bold text-white text-center'
      >
        Wating for Restaurant to Prepare Your Order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
