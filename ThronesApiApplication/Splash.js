import React, { useState, useEffect } from "react";
import { View, Text,StyleSheet, } from 'react-native';

const Splash = ({ navigation }) => {
    const [isGo, setIsGo] = useState(false);

    useEffect(() => {
        if (isGo === false) {
          setTimeout(() => {
            navigation.navigate("Login");
            setIsGo(true);
          }, 2000);
        }
      }, [isGo]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>My APP</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#292828',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 23,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

export default Splash;
