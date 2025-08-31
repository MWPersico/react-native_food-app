import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const menuButtons = [
  { id: "home", icon: "home" },
  { id: "book", icon: "book" },
  { id: "bookmark", icon: "bookmark" },
  { id: "notifications", icon: "notifications" },
];

export default function MenuInferior() {
  const [activeId, setActiveId] = useState("home");

  return (
    <View style={styles.container}>
      {menuButtons.slice(0, 2).map((btn) => (
        <BotaoMenu
          key={btn.id}
          icone={btn.icon}
          ativo={activeId === btn.id}
          onPress={() => setActiveId(btn.id)}
        />
      ))}

      <TouchableOpacity
        style={styles.centerButton}
      >
        <Svg width={75} height={75} viewBox="0 0 100 100">
          <Path
            d="M38.832080206443 6.6283862983199a19 19 0 0 1 22.335839587114 0l29.441248052883 21.390318787974a19 19 0 0 1 6.9021540160509 21.242645786248l-11.245556084985 34.610262829138a19 19 0 0 1 -18.070073809608 13.128677106876l-36.391383935796 0a19 19 0 0 1 -18.070073809608 -13.128677106876l-11.245556084985 -34.610262829138a19 19 0 0 1 6.9021540160509 -21.242645786248"
            fill="white"
            stroke="white"
            strokeWidth={2}
          />
          <Path
            d="M43.832080206443 13.6283862983199a14 14 0 0 1 12.335839587114 0l24.441248052883 17.390318787974a14 14 0 0 1 5.9021540160509 15.242645786248l-9.245556084985 28.610262829138a14 14 0 0 1 -14.070073809608 9.128677106876l-29.391383935796 0a14 14 0 0 1 -14.070073809608 -9.128677106876l-9.245556084985 -28.610262829138a14 14 0 0 1 5.9021540160509 -15.242645786248"
            fill="#FAC22D"
            stroke="#FAC22D"
            strokeWidth={2}
          />
        </Svg>

        <Ionicons
          name="basket"
          size={28}
          color="#14181B"
          style={styles.centerIcon}
        />
      </TouchableOpacity>

      {menuButtons.slice(2).map((btn) => (
        <BotaoMenu
          key={btn.id}
          icone={btn.icon}
          ativo={activeId === btn.id}
          onPress={() => setActiveId(btn.id)}
        />
      ))}
    </View>
  );
}

function BotaoMenu(props: {
  icone: any;
  ativo?: boolean;
  onPress?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const corIcone = props.ativo ? "#FAC22D" : isHovered ? "#FAC22D" : "#14181B";

  return (
    <TouchableOpacity
      onPress={props.onPress}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <Ionicons
        name={props.icone}
        size={24}
        color={corIcone}
        style={styles.iconShadow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#14181B",
    padding: 16,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 18
  },
  centerButton: {
    width: 75,
    height: 70,
    marginTop: -65,
    alignItems: "center",
    justifyContent: "center",
  },
  centerIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -13.5 }, { translateY: -16 }],
  },
  iconShadow: {
    textShadowColor: "#fff",
    textShadowRadius: 3  
  },
});
