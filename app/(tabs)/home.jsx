import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'

const Home = () => {
  return (
    <View>
      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>

      {/* Category */}
      <Category/>

      {/* Popular Business List */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})