import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

const Home = () => {
  return (
    <ScrollView>
      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>

      {/* Category */}
      <Category/>

      {/* Popular Business List */}
      <PopularBusiness/>
      
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})