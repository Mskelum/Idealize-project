import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwitchContext } from '../components/Switch';

const About = () => {

    const { isEnabled } = useContext(SwitchContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: isEnabled ? '#3F3F3F' : 'white' }}>

                <View style={styles.profile}>

                    <Text style={{
                        color: isEnabled ? 'white' : 'black',
                        textAlign: 'center', paddingBottom: 20, fontSize: 18, lineHeight: 24
                    }}>

                        Welcome to Money Earn Ways, the app that helps you make money easily and efficiently!
                        Our mission is to provide a platform that connects people with money-making opportunities
                        and allows them to earn extra income from the comfort of their own homes.
                    </Text>

                    <Text style={{
                        color: isEnabled ? 'white' : 'black',
                        textAlign: 'center', paddingBottom: 20, fontSize: 18, lineHeight: 24
                    }}>
                        At Money Earn Ways, we believe that everyone deserves financial freedom, and we're here to help
                        you achieve that goal. Our app features a variety of ways to earn money, including completing
                        surveys, participating in online tasks, and testing new products.We're constantly updating
                        our app to provide the best possible user experience, and we welcome feedback from our users
                        to improve our service. Thank you for choosing Money Earn Ways. We're excited to help you on
                        your journey toward financial independence!
                    </Text>

                    <Text style={{
                        color: isEnabled ? 'white' : 'black',
                        textAlign: 'center', paddingBottom: 20, fontSize: 18, lineHeight: 24
                    }}>
                        Thank you for choosing Money Earn Ways. We're excited to help you on
                        your journey toward financial independence!
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>



    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 24
    },
    profile: {
        paddingTop: 1,
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default About