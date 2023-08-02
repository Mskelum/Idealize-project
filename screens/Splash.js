import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Animated } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {

    const [IsGo, setIsGo] = useState(true);
    const Navigation = useNavigation();
    const [animation, setAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        if (IsGo == true) {
            setTimeout(() => {
                Navigation.replace('Login');
                setIsGo(false);
            }, 2000);
        }
    });

    return (
        <View style={styles.backGround}>
            <ImageBackground source={require('../assests/images/loading.gif')}
                style={styles.image} resizeMode='stretch'>

                {/* <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']} // Adjust the opacity value (0.7) as needed
                    style={{
                        justifyContent: 'flex-end',
                        height: 200,
                    }}
                /> */}

                {/* <Animated.Text style={[styles.Welcome, { transform: [{ translateY }] }]}>රසසරණිය වෙත සාදරයෙන් පිළිගනිමු</Animated.Text> */}

            </ImageBackground>

            {/* <View style={styles.title}>
                <Text style={styles.text1}>Save your money..... </Text>
                <Text style={styles.text2}>We always with you</Text>
            </View> */}

        </View>
    );
};

const styles = StyleSheet.create({

    backGround: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 400,
        height: 800,
    },

    title: {
        marginTop: 30,
        marginHorizontal: 30
    },

    text1: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },

    text2: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
    },

    image: {
        marginTop: 200,
        width: 300,
        height: 400,
    },
});

export default Splash