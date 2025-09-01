import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
const itens = [
  {
    id: "1",
    nome: "Beef Burger",
    calorias: 70,
    preco: 12.0,
    imagem: require("@/assets/images/hamburguer.png"),
  },
  {
    id: "2",
    nome: "Pancakes",
    calorias: 60,
    preco: 15.0,
    imagem: require("@/assets/images/panquecas.png"),
  },
  {
    id: "3",
    nome: "French-fries",
    calorias: 50,
    preco: 10.0,
    imagem: require("@/assets/images/fritas.png"),
  },
];

export default function ListaItens({
  dados = itens,
  onClicaItem,
}: {
  dados?: typeof itens;
  onClicaItem?: (item: any) => void;
}) {
  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => onClicaItem && onClicaItem(item)}
        >
          <View style={styles.infoArea}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.caloriasArea}>
              <Image source={require("@/assets/images/fire-sml.png")} />
              <Text style={styles.calorias}>{item.calorias} Calories</Text>
            </View>
            <Text style={styles.preco}>${item.preco.toFixed(2)}</Text>
          </View>
          <Image source={item.imagem} style={styles.imagem} />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  infoArea: {
    flex: 1,
    justifyContent: "center",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14181B",
    marginBottom: 2,
    fontFamily: "Inter",
  },
  caloriasArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  emoji: {
    fontSize: 15,
    marginRight: 4,
  },
  calorias: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Inter",
  },
  preco: {
    fontSize: 16,
    color: "#FAC22D",
    fontWeight: "bold",
    marginTop: 2,
    fontFamily: "Inter",
  },
  imagem: {
    aspectRatio: 1,
    height: 80,
    resizeMode: "contain",
    marginLeft: 12,
  },
});
