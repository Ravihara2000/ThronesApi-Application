import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        
      </View>
      <View style={styles.btarea}>
        
          <View style={styles.buttons}>
            <Text style={styles.buttontext}>SIGN LANGUAGE INTO SINHALA</Text>
          </View>
      

        <View style={styles.space} />

        <TouchableOpacity>
          <View style={styles.buttons}>
            <Text style={styles.buttontext}>HISTORY</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.space} />



        <View style={styles.space} />


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "center",
    position: "absolute",
    top: 0,
  },
  buttons: {
    height: 55,
    borderRadius: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "orange",
    bottom: 150,
    marginLeft: 30,
    marginRight: 30,
  },
  space: {
    width: 10,
    height: 10,
  },

  buttontext: {
    color: "white",
    fontSize: 11,
    letterSpacing: 1.2,
    marginTop: 5,
    textAlign: "center",
  },
  btarea: {
    marginTop: 450,
  },
});

