import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../data/products';
import FavouriteItem from '../../components/FavouriteItem';
import Header from '../../components/Header';
 
const Favourites = ({navigation}: any) => {

    const renderItem = ({item}: any) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item})
        }
        return(
            <FavouriteItem onPress={onProductPress} {...item}></FavouriteItem>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favourites"></Header>
            
            <FlatList 
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => String(item?.id)}
            ></FlatList>
        </SafeAreaView>
    )
}
 
export default React.memo(Favourites);