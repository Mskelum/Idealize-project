import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwitchContext } from '../components/Switch';

const Contact = () => {

    const { isEnabled } = useContext(SwitchContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: isEnabled ? '#3F3F3F' : 'white' }}>

                <View style={styles.profile}>
                    <Text style={{
                        color: isEnabled ? 'white' : 'black',
                        textAlign: 'center', paddingBottom: 20, fontSize: 18, lineHeight: 29
                    }}>
                        We value your feedback and are always here to help.
                        If you have any questions, comments, or concerns about Money Earn Ways, please don't hesitate to contact us.
                        Our team is available to assist you with any issues you may encounter while using our app.
                    </Text>
                </View>

                <View style={{ marginHorizontal: 15, }}>

                    <Text style={{ color: isEnabled ? 'white' : 'black', fontSize: 18, marginHorizontal: 5, paddingBottom: 18 }}>
                        Email :
                    </Text>

                    <View style={styles.row}>
                        <Text style={{ color: isEnabled ? 'black' : 'black', fontSize: 17 }}>
                            mskelum99@gmail.com
                        </Text>
                    </View>

                    <Text style={{ color: isEnabled ? 'white' : 'black', fontSize: 18, marginHorizontal: 5, paddingBottom: 18 }}>
                        Whatsapp :
                    </Text>

                    <View style={styles.row}>
                        <Text style={{ color: isEnabled ? 'black' : 'black', fontSize: 17 }}>
                            +9470 5845 954
                        </Text>
                    </View>

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
        padding: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        width: 300,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 25,
        marginHorizontal: 20,
        paddingHorizontal: 15
    },
})

export default Contact