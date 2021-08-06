import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return(
    <View style={styles.container} >
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text} >Getting the weather...</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal:20,
        paddingVertical: 100,
        backgroundColor: "#fdf6aa"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,

    }
})
