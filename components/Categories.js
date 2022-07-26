import React, { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import CategoryCard from "./CategoryCard"
import sanityClient, { urlFor } from "../sanity"

function Categories() {
  const [categroies, setCategories] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => setCategories(data))
  }, [])
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Categoris Cards */}
      {categroies?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
