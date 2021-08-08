import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["skyblue","#eee"],
    },
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["skyblue","#eee"],
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["skyblue","#eee"],
    },
    Rain: {
        iconName: "rainy",
        gradient: ["skyblue","#eee"],
    },
    Snow: {
        iconName: "snow",
        gradient: ["skyblue","#eee"],
    },
    Atmosphere: {
        iconName: "cloud",
        gradient: ["skyblue","#eee"],
    },
    Clear: {
        iconName: "cloud",
        gradient: ["skyblue","#eee"],
    },
}

const Weather = ({ temp, condition }) => {
    return(

        <LinearGradient 
            colors={["skyblue","#eee"]} 
            style={styles.container} 
        >
            <View style={styles.halfContainer}>
                <Ionicons 
                    name={"cloud"} 
                    color="white" 
                    size={96} 
                />
                <Text style={styles.text}>
                    {temp}℃
                </Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.text}>
                    {condition}
                </Text>
                <Text style={styles.text}>
                    subtitle
                </Text>
            </View>
        </LinearGradient>
 
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Clouds",
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36,
        marginTop: 15,
        color: 'white',
    }
})

export default Weather;