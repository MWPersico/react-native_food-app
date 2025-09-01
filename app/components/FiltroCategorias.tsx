import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categorias = [
  { id: "fast", nome: "Fast Food", icone: require("@/assets/images/donut-sml.png") },
  { id: "drink", nome: "Drink food", icone: require("@/assets/images/drink-sml.png") },
  { id: "fresh", nome: "Fresh Food", icone: require("@/assets/images/fruit-sml.png") },
];

const iconSize = 20;

export default function FiltroCategorias() {
  const [selecionada, setSelecionada] = useState("fast");

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.categoria,
              selecionada === cat.id && styles.categoriaAtiva,
            ]}
            onPress={() => setSelecionada(cat.id)}
          >
            <Image
              source={cat.icone}
              style={{
                width: iconSize,
                height: iconSize,
                resizeMode: "contain",
                marginRight:5
              }}
            />
            <Text
              style={[
                styles.categoriaTexto,
                selecionada === cat.id && styles.categoriaTextoAtiva,
              ]}
            >
              {cat.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  categoria: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 18,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  categoriaAtiva: {
    backgroundColor: "#FAC22D",
  },
  categoriaTexto: {
    fontSize: 13,
    color: "#14181B",
    fontFamily: "Inter",
  },
  categoriaTextoAtiva: {
    fontWeight: "bold",
  },
});