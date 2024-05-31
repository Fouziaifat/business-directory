import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import  { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
const Header = () => {
    const {user} = useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10
        }}>
            <Image source={{uri:user?.imageUrl}} 
            style={{
                width:45,
                height:45,
                borderRadius:99
            }}
                />
                <View>
            <Text style={{
                color:'#fff'
            }}>Welcome</Text>
            <Text style={{
              fontSize:19,
              color:'#fff',
              fontFamily:'Outfitmedium'  
            }}>{user?.fullName}</Text>
        </View>
        </View>
        {/* search bar */}
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            padding:10,
            backgroundColor:'#fff',
            marginVertical:10,
            marginTop:15,
            borderRadius:8
        }}>
            <Ionicons name="search" size={24} color={Colors.PRIMARY} />
             <TextInput placeholder='Search....'
             style={{
                fontFamily:'Outfitlight',
                fontSize:16,
                textAlign:'center'
             }}/> 
        </View>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})