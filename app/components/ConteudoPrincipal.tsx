import { useState } from "react";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";
import FiltroCategorias from "./FiltroCategorias";
import ListaItens from "./ListaItens";
import { BotaoMenu } from "./MenuInferior";
import SearchInput from "./SearchInput";

export type item = {
  id: string;
  nome: string;
  calorias: number;
  preco: number;
  imagem: ImageSourcePropType;
  descricao: string;
  tempo: string;
  avaliacao: number;
};

const itens: item[] = [
  {
    id: "1",
    nome: "Beef Burger",
    calorias: 70,
    preco: 12.0,
    imagem: require("@/assets/images/hamburguer.png"),
    descricao: "Hambúrguer suculento com queijo e salada.",
    tempo: "20-30 Min",
    avaliacao: 4.9,
  },
  {
    id: "2",
    nome: "Pancakes",
    calorias: 60,
    preco: 15.0,
    imagem: require("@/assets/images/panquecas.png"),
    descricao: "Panquecas fofinhas com mel e frutas.",
    tempo: "15-20 Min",
    avaliacao: 4.7,
  },
  {
    id: "3",
    nome: "French-fries",
    calorias: 50,
    preco: 10.0,
    imagem: require("@/assets/images/fritas.png"),
    descricao: "Batatas fritas crocantes.",
    tempo: "10-15 Min",
    avaliacao: 4.8,
  },
];

export default function ConteudoPrincipal() {
  const [itemSelecionado, setItemSelecionado] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <SearchInput />
        <BotaoMenu icone="options" estilo={styles.filterButton} />
      </View>
      <FiltroCategorias />
      {itemSelecionado ? (
        <DetalheItem
          item={itemSelecionado}
          onVoltar={() => setItemSelecionado(null)}
        />
      ) : (
        <ListaItens dados={itens} onClicaItem={setItemSelecionado} />
      )}
    </View>
  );
}

function DetalheItem({ item, onVoltar }: { item: item; onVoltar: () => void }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8E1",
        borderRadius: 24,
        padding: 20,
      }}
    >
      <BotaoMenu icone="arrow-back" onPress={onVoltar} />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
        {item.nome}
      </Text>
      <Image
        source={item.imagem}
        style={{ width: "100%", height: 180, resizeMode: "contain" }}
      />
      <Text
        style={{
          color: "#FAC22D",
          fontWeight: "bold",
          fontSize: 18,
          marginVertical: 8,
        }}
      >
        ${item.preco.toFixed(2)}
      </Text>
      <Text style={{ color: "#888", marginBottom: 8 }}>
        {item.tempo} | {item.calorias} Cal | ⭐ {item.avaliacao}
      </Text>
      <Text style={{ fontWeight: "bold", marginTop: 12 }}>Description</Text>
      <Text style={{ color: "#444" }}>{item.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  filters: {
    flexDirection: "row",
  },
  filterButton: {
    backgroundColor: "#FAC22D",
    aspectRatio: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 4,
  },
});
