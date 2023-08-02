import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import About from '../screens/About';
import Splash from '../screens/Splash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import { SwitchProvider } from '../components/Switch';
import Contact from '../screens/Contact';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgotted from '../screens/Forgot';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View>
                <Image source={require('../assests/images/logos/dw.jpg')}
                    style={{ margin: 1, marginTop: -10, width: 280, height: 210, borderBottomRightRadius: 40 }} resizeMode="stretch" />
                <View style={{ margin: 10 }} />
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const AppHome = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SwitchProvider value={{ isEnabled, setIsEnabled, toggleSwitch }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Forgot" component={Forgotted} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" options={{ headerShown: false, backBehavior: 'none' }}>

                        {() => (
                            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
                                screenOptions={{
                                    drawerActiveBackgroundColor: '#7b2cbf',
                                    drawerInactiveTintColor: '#333',
                                    drawerActiveTintColor: '#fff',
                                }}>

                                <Drawer.Screen name="Home  " component={Home}
                                    options={({ navigation }) => ({
                                        headerLeft: () => (
                                            <View style={{ marginLeft: 10 }}>
                                                <Icon
                                                    name="home"
                                                    size={30}
                                                    color={'white'}
                                                    backgroundColor="black"
                                                />
                                            </View>
                                        ),
                                        headerTitleStyle: { color: 'white' },
                                        headerStyle: { backgroundColor: 'black' },
                                        headerLeft: () => (
                                            <View style={{ marginLeft: 4 }}>
                                                <Icon.Button
                                                    name="menu"
                                                    size={30}
                                                    backgroundColor="black"
                                                    onPress={() => navigation.openDrawer()}
                                                />
                                            </View>
                                        ),
                                    })} />

                                <Drawer.Screen name="About Us" component={About}
                                    options={({ navigation }) => ({
                                        headerLeft: () => (
                                            <View style={{ marginLeft: 20 }}>
                                                <Icon.Button
                                                    name="menu"
                                                    size={25}
                                                    backgroundColor="#000"
                                                    onPress={() => navigation.openDrawer()}
                                                />
                                            </View>
                                        ),
                                        headerTitleStyle: { color: 'white' },
                                        headerStyle: { backgroundColor: 'black' },
                                    })} />

                                <Drawer.Screen name="Settings" component={Settings}
                                    options={({ navigation }) => ({
                                        headerLeft: () => (
                                            <View style={{ marginLeft: 20 }}>
                                                <Icon.Button
                                                    name="menu"
                                                    size={25}
                                                    backgroundColor="#000"
                                                    onPress={() => navigation.openDrawer()}
                                                />
                                            </View>
                                        ),
                                        headerTitleStyle: { color: 'white' },
                                        headerStyle: { backgroundColor: 'black' },
                                    })} />

                                <Drawer.Screen name="Contact Us" component={Contact}
                                    options={({ navigation }) => ({
                                        headerLeft: () => (
                                            <View style={{ marginLeft: 20 }}>
                                                <Icon.Button
                                                    name="menu"
                                                    size={25}
                                                    backgroundColor="#000"
                                                    onPress={() => navigation.openDrawer()}
                                                />
                                            </View>
                                        ),
                                        headerTitleStyle: { color: 'white' },
                                        headerStyle: { backgroundColor: 'black' },
                                    })} />

                            </Drawer.Navigator>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SwitchProvider>
    );
};

export default AppHome;
