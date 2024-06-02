import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import CategoryItems from "../Home/CategoryItem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    GetCategoryList();
  }, []);
  const GetCategoryList = async () => {
    setCategoryList([])
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Outfitmedium",
          }}
        >
          Category{" "}
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "Outfitmedium" }}>
          View All
        </Text>
      </View>

      <FlatList 
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}}
        renderItem={({item,index})=>(
            <CategoryItems 
            category={item} 
            key={index} 
            onCategoryPress={(category)=>console.log(category)}
            />
        )}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({});