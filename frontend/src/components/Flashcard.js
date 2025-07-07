import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';

const Flashcard = ({ }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi, this is the flashcard template!</Text>
        <View style={styles.buttonPosition}>
            <Button title="hard"/>
            <Button title="medium"/>
            <Button title="easy"/>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      padding: 25,
      backgroundColor: '#eee',
      borderRadius: 8,
    },
    text: {
      fontSize: 18,
      margin: 10,
      marginBottom: 50,
    },
    buttonPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });
  
  export default Flashcard;