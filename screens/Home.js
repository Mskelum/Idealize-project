import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, onPress, TouchableOpacity } from 'react-native';
import { SwitchContext } from '../components/Switch';

const Home = ({ navigation }) => {

    const { isEnabled } = useContext(SwitchContext);

    return (
        <View contentContainerStyle={styles.container} style={{ backgroundColor: isEnabled ? '#3F3F3F' : 'black' }}>

            <View style={styles.section1}>
                <Text style={{
                    color: isEnabled ? 'white' : 'white',
                    fontSize: 27, lineHeight: 35, width: 170, marginTop: -55, fontWeight: 'bold'
                }}>
                    Save your money with us
                </Text>

                <Image source={require('../assests/images/1.jpg')}
                    style={{
                        width: 150, height: 150, marginTop: -35
                    }} />
            </View>

            <View style={styles.section2}>
                <Text style={{
                    color: isEnabled ? 'white' : 'blue',
                    textAlign: 'center', marginTop: 30, fontSize: 18, fontWeight: 'bold', marginBottom: 20
                }}>
                    How to get started?
                </Text>

                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Topic1')}>
                        <View style={styles.ListContainer}>
                            <Image source={require('../assests/images/1.jpg')}
                                style={{
                                    width: 100, height: 100, borderRadius: 10
                                }} />
                            <Text style={styles.title}>Section01</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Topic2')}>
                        <View style={styles.ListContainer}>
                            <Image source={require('../assests/images/1.jpg')}
                                style={{
                                    width: 100, height: 100, borderRadius: 10
                                }} />
                            <Text style={styles.title}>Section02</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Topic3')}>
                        <View style={styles.ListContainer}>
                            <Image source={require('../assests/images/1.jpg')}
                                style={{
                                    width: 100, height: 100, borderRadius: 10
                                }} />
                            <Text style={styles.title}>Section03</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Topic4')}>
                        <View style={styles.ListContainer}>
                            <Image source={require('../assests/images/1.jpg')}
                                style={{
                                    width: 100, height: 100, borderRadius: 10
                                }} />
                            <Text style={styles.title}>Section04</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 24,
        backgroundColor: 'black'
    },
    section1: {
        flexDirection: 'row',
        height: 270,
        marginTop: -6,
        marginBottom: -70,
        backgroundColor: '#BF40BF',
        paddingTop: 1,
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section2: {
        backgroundColor: 'white',
        borderRadius: 40,
        height: 533,
    },
    ListContainer: {
        marginHorizontal: 10,
        flexDirection: 'column',
        height: 190,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        elevation: 5
    },
    title: {
        marginTop: 5,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },


})

export default Home