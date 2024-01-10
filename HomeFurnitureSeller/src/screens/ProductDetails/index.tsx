import React from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import Button from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";

function ProductDetails({navigation, route}: any): React.JSX.Element {
    const {product} = route?.params || {};

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        //Make a phone call
        const phone = '919994611';
        Linking.openURL(`tel: ${phone}`);
        //Send an email
        const email = ''
        Linking.openURL(`mail to : ${email}`);
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images}></ImageCarousel>
                ) : (
                    <Image style={styles.image} source={{uri: product.image}}></Image>
                )}
                
                <View style={styles.content}>
                    <Text style={styles.title}> {product?.title} </Text>
                    <Text style={styles.price}> {product?.price} </Text>
                    <Text style={styles.description}> {product?.description} </Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/back.png')}></Image>
                </Pressable>
                
            </ScrollView>

            <View style={styles.footers}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../assets/bookmark_blue.png')}></Image>
                </Pressable>
                <Button onPress={onContact} title='Contact Seller'> </Button>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(ProductDetails);