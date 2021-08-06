import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["skyblue","#eee"]
    },
    Thunderstorm: {
        iconName: "",
        gradient: [],
    },
    Drizzle: {
        iconName: "",
        gradient: [],
    },
    Rain: {
        iconName: "",
        gradient: [],
    },
    Snow: {
        iconName: "",
        gradient: [],
    },
    Atmosphere: {
        iconName: "",
        gradient: [],
    },
    Clear: {
        iconName: "",
        gradient: [],
    },
}

const Weather = ({ temp, condition }) => {
    return(

        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container} 
        >
            <View style={styles.halfContainer}>
                <Ionicons 
                    name={weatherOptions[condition].iconName} 
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
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
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