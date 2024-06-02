import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from "../../constants/Colors";
import { collection, doc, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import PopularBusinessCard from './PopularBusinessCard';


export default function PopularBusiness () {
  const [businessList, setBusinessList] = useState([])
  useEffect(()=>{
    GetBusinessList();
  },[])

  const GetBusinessList=async()=>{
    setBusinessList([]);
    const q = query(collection(db,'BusinessList'),limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev)=>[...prev,doc.data()]);
    })
  }
  return (
    <View>
      <View
        style={{
          paddingLeft: 20,
          marginBottom:10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Outfitmedium",
          }}
        >
          Popular Business{" "}
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "Outfitmedium" }}>
          View All
        </Text>
      </View>

      <FlatList
      data={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=>(
        <PopularBusinessCard
        key={index}
        business={item}
       
        />
      )}
      />
    </View>
  )
}