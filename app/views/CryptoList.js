import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, Image, TouchableWithoutFeedback, View } from 'react-native';
import { CryptoItem } from './CryptoItem';

export const CryptoList = (navigation) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=EUR', {
        headers: {
            'X-CMC_PRO_API_KEY': '433020f4-2f91-45d1-a246-2a922a6c8f11'
          }
    })
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
        <View style={{ flex: 1, padding: 30 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <CryptoItem navigate = {navigation} item = {item} />
                    )}
                />
            )}
        </View>
    )
}


