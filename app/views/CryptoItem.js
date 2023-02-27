import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, Image, TouchableWithoutFeedback, View } from 'react-native';

export const CryptoItem = (props) => {
    const onPressItem = () => {
        props.navigate.navigation.navigate('CryptoDetail', { item: props.item })
    }

    return (
        <TouchableWithoutFeedback onPress={onPressItem} >
            <View style = {styles.container}>
                <Image
                
                    style={{width:64, height: 64}}
                    source= {{uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+ props.item.id + '.png'}}
                />
                <Text>{props.item.id}, {props.item.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderBottomWidth: 2
    }
});