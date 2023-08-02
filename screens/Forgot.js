import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/AntDesign'
// import { auth } from '../Firebase';

const Forgot = ({ navigation }) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleReset = () => {

    }

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <View style={{ paddingHorizontal: 25, marginTop: 80 }}>

                    <View style={{ marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={require('../assests/images/reglogo.png')} />
                    </View>

                    <Text style={styles.logintxt}>Reset your password</Text>

                    <View style={styles.txtinput}>
                        <MaterialIcons name='email' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholderTextColor='gray'
                            color='black'
                            placeholder='Email Address'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={{ flex: 1, paddingVertical: 0 }}
                            keyboardType="email-address"
                        />
                    </View>

                    <TouchableOpacity onPress={handleReset}
                        style={{ backgroundColor: '#AD40AF', padding: 12, borderRadius: 16, marginBottom: 30, marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Reset password</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Remember password?  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Forgot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },

    logintxt: {
        fontSize: 28,
        color: '#240046',
        marginBottom: 30,
        textAlign: 'center',
        marginBottom: 80
    },

    txtinput: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    }

})