import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import AnimatedStack from './src/components/AnimatedStack'
import Card from './src/components/TinderCard'

const users = [
    {
        image: 'https://images.pexels.com/photos/5012108/pexels-photo-5012108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Justyna Papuga',
        bio: 'Smile every day ;)',
    },
    {
        image: 'https://images.pexels.com/photos/6739248/pexels-photo-6739248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Angelika Ktoś',
        bio: 'Here we go again',
    },
    {
        image: 'https://images.pexels.com/photos/7291219/pexels-photo-7291219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Angelika Ktoś',
        bio: 'Here we go again',
    },
]

const App = () => {
    return (
        <View style={style.pageContainer}>
            <AnimatedStack
                data={users}
                renderItem={({ item }) => <Card user={item} />}
            />
            <StatusBar />
        </View>
    )
}

const style = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})

export default App
