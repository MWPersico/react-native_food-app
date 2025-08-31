import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CabecalhoHome() {
  return (
    <View style={styles.container}>
        <View style={styles.superior}>
            <Image source={require("@/assets/images/profile_picture.png")}></Image>
            <Ionicons
                name="menu"
                size={32}
                color="#14181B"
            />
        </View>
        <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Welcome to Our</Text>
            <Text style={[styles.welcomeText, {fontWeight:"900"}]}><Text style={{color:"#FAC22D"}}>Foodi</Text> App</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  superior: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome:{
    paddingVertical:18
  },
  welcomeText:{
    fontWeight:500,
    fontSize:27,
    fontFamily:"Inter"
  }
});
