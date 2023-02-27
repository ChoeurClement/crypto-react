import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const CryptoDetail = ({navigation, route}) => {

    return (
        <View style={{flex:1}}>
            <View style={styles.headStyle}>
                <Text style={styles.headText}>{route.params.item.name}</Text>

            </View>

            <View style={{flex:1}}>
                <Image
                    style={{width:64, height: 64}}
                    source= {{uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+ route.params.item.id + '.png'}}
                />

                <Text>Prix : {route.params.item.quote.EUR.price} €</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headText: {
        color: '#ffffff',
        fontSize: 28,
        flex: 4,
        textAlign: 'center'
    },
    headStyle: {
        paddingTop: 5,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 50
    }
});
