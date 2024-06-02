import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinessCard({business}) {
  return (
    <View style={{
        marginLeft:20,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15
    }}>
        <Image source={{uri:business?.imageUrl}}
        style={{
            height:130,
            width:200,
            borderRadius:15
        }}
        />
        <View style={{
            marginTop:7,
            gap:5
        }}>
            <Text style={{
                fontFamily:'Outfitbold',
                fontSize:17,
            }}>{business.name}</Text>
             <Text style={{
                fontFamily:'Outfitlight',
                fontSize:13,
                color:Colors.GRAY
            }}>{business.address}</Text>


            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
            }}>
                <View style={{
                    flexDirection:'row',
                    display:'flex',
                    gap:5

                }}>
                  <Image source={require('../../assets/images/star.png')}
                  style={{
                    width:15,
                    height:15,
                
                  }}
                  />  
                  <Text style={{
                    fontFamily:'Outfitlight',
                  }}>4.5</Text>
                </View>
                <Text style={{
                    fontFamily:'Outfitlight',
                    fontSize:10,
                    backgroundColor:Colors.PRIMARY,
                    color:'#fff',
                    padding:3,
                    borderRadius:5
                }}>{business.category}</Text>
            </View>
            
        </View>
    </View>
  )
}