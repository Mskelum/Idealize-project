import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { auth } from '../Firebase';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginBottom: 20 }}>
                <Image style={{ width: "100%", height: 300 }} source={require('../assests/images/login.jpg')} />
            </View>

            <View style={{ paddingHorizontal: 25 }}>

                <View style={styles.section1}>

                    {/* <Text style={styles.logintxt}>Login</Text> */}

                    <View style={styles.txtinput}>
                        <MaterialIcons name='email' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholderTextColor='black'
                            fontWeight='bold'
                            color='black'
                            placeholder='E-mail'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={{ flex: 1, paddingVertical: 0 }}
                            keyboardType="email-address" />
                    </View>

                    <View style={styles.txtinput}>
                        <MaterialIcons name='password' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholderTextColor='black'
                            fontWeight='bold'
                            color='black'
                            placeholder='Password'
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={{ flex: 1, paddingVertical: 0 }}
                            secureTextEntry={true} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <Text style={{ color: 'white', fontWeight: 700, marginBottom: 20, marginHorizontal: -110 }}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}
                        style={{ backgroundColor: 'black', padding: 12, borderRadius: 16, marginBottom: 30, width: 150 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: 'center', color: 'white', marginBottom: 30 }}>Or Login With..</Text>

                    <TouchableOpacity style={{ alignItems: 'center', marginBottom: 30 }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../assests/images/google.png')} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', marginBottom: 30 }}>

                        <Text style={{ color: 'white', fontWeight: '700' }}>Do you have no account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                            <Text style={{ color: 'white', fontWeight: '700' }}>Register</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>

        </SafeAreaView >
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    logintxt: {
        fontSize: 28,
        color: '#240046',
        marginBottom: 30,
        textAlign: 'center'
    },
    txtinput: {
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 12,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
    },
    section1: {
        height: 430,
        marginTop: 5,
        backgroundColor: 'blue',
        borderRadius: 30,
        padding: 19,
        alignItems: 'center',
    },

})