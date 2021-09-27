import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    const { image, name, bio } = props.user
    return (
        <View style={style.card}>
            <ImageBackground
                source={{
                    uri: `${image}`,
                }}
                style={style.image}
            >
                <View style={style.cardInner}>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    cardInner: {
        padding: 10,
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },
})
export default Card
