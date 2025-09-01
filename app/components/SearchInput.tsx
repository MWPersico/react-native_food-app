import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchInput(){
    return (
        <View style={styles.container}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
            style={styles.input}
            placeholder="Find your food..."
            placeholderTextColor="#999"
            underlineColorAndroid="transparent"
        />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:"#F9F9F9",
    borderRadius: 12,
    alignItems:"center"
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});